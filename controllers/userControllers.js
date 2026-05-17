import jwt from 'jsonwebtoken'

const adminLogin = async (req, res) => {

    try {

        const { email, password } = req.body

         if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
) {
    const token = jwt.sign(
        { email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )

    return res.json({
        success: true,
        token,
        message: "Login successful"
    })
}
         
        else {

            res.json({
                success: false,
                message: 'Invalid credentials'
            })

        }

    } catch (error) {

        res.json({
            success: false,
            message: error.message
        })

    }
}

export { adminLogin }
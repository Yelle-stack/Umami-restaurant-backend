import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
  try {

    const { token } = req.headers

    // Vérifie si le token existe
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized User'
      })
    }

    // Vérifie et décode le token
    const token_decode = jwt.verify(
      token,
      process.env.JWT_SECRET
    )

    // Vérifie si l'utilisateur est admin
    if (token_decode.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'User is not authorized'
      })
    }

    // Passe au middleware suivant
    next()

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: error.message
    })

  }
}

export default adminAuth
import app from './app'
const { PORT } = require('./database/constants.ts')

app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT}`))

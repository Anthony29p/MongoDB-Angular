import app from "./app";
import './database'

app.listen(app.get('port'),( () => {
    console.log(`listenig on port ${app.get('port')}`)
}))
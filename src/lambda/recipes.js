
import './database/db'
import Recipe from './database/recipeModel'

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  try {
    const data = await Recipe.find({}).exec()
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept'
      }
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

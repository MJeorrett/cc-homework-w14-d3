const XmlHttpHelper = {

  getWithAuthorizationToken( url, token, onloadCallback ) {
    var req = new XMLHttpRequest()
    req.open( 'get', url )
    req.setRequestHeader( 'Authorization', `Bearer ${token}` )
    req.onload = () => {
      const dataObject = JSON.parse( req.responseText )
      if( req.status === 200 ) {
        onloadCallback( dataObject )
      } else {
        console.log( "Error GET from:", url, ", failed with status: ", req.status, "/n", dataObject );
      }
    }
    req.send( null )
  }

}

export default XmlHttpHelper

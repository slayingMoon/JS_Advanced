function requestValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if(!validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRegex = /^[\w.]+$/g;
    if(!uriRegex.test(obj.uri) || !obj.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }

    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if(!validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = /^[^<>\\&'"]*$/g;
    if(!messageRegex.test(obj.message) || !obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

let obj = requestValidator({
    method: 'GET',
    version: 'HTTP/1.1',
    message: ''
  }
  );
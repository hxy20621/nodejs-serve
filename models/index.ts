import mongodb = require('mongodb');
import {dbUrl} from "../config";

const client = new mongodb.MongoClient(dbUrl, {
  tls: true,
  tlsAllowInvalidHostnames: true,
  // tlsCAFile: `${__dirname}/certs/ca.pem`,
  // tlsCertificateKeyFile: `${__dirname}/certs/x509/client.pem`,
  tlsCertificateKeyFilePassword: '10gen',
});

// client.close()
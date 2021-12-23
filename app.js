const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
  axios.get('https://sandbox-quickbooks.api.intuit.com/v3/company/4625319964620633028/invoice?minorversion=63').then(response => {
    console.log(response);
  });
};

const sendData = () => {
  axios
    .post(
      'https://sandbox-quickbooks.api.intuit.com/v3/company/4625319964620633028/invoice?minorversion=63',
      {
        "Line": [
          {
            "DetailType": "SalesItemLineDetail",
            "Amount": 9890,
            "SalesItemLineDetail": {
              "ItemRef": {
                "name": "Services",
                "value": "1"
              }
            }
          }
        ],
        "CustomerRef": {
          "value": "1"
        }
      },
      {
         headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..SPXtaDUFBLuAbQpXHMLY9w.p6JO9Wd0Oni_jqiMTxjSTw3yvufa__3t8uGOHkonSQ812hoLr21DraUrF8dhFbTvfh1fhpxXc2c9N603hH_KvjsjGzsyS3Q0mSGtwloZXD7C6VvaprmZe1WRtnDXaQZfAJEspFWQ87Ct3PcUg3bx1QqlxX8CHw5KyjyVW8mK8fjzAaWW9Z9ivDn33z3DYfwhixdmSzUEp4n5gpdp-NDlBdbBH1V99KAykhdKE0_HAdsfIBuWVk8R-nXBAzF5gIRHxxZOeLShlFiXcvEYHowQz8EYGYGuKiEL7nICB7mQxxOuzISksUTi8fkdXkrsJem6WLj3CXn0iT2jGlJS_2rmPXjBGrbond2fgdSGVd7fwlsY8VfTwqncgac9HTbJC5LOFCpowFN_5ZHjFZ2nfYYsDz5f6YJtohtVH-6DU7h-XJ2ewfyZ9gpvwBAnsoGz3x-qEWeYilWoNdID-itUBvwu4LQKxkR6YdBvhsly5BdxfwvPA_0nBaDnMhc8mEJwVjwO8bwWVkE5MxrbG1V4CmgohSK-YYmHm3XQiiaSBESYn7UReypKN0iFZYH-1I58UrOh9FLghXSIGD9gcYR-7M-EbGHkaLGJ8yXJ6PXEPmNM5fBQfLewsHCr62mBpc-W1e6UNCzGvIXUDyu31wLz0_D8xpNxKi3QdSAUautkOFZMPSJCeKQrUUAO4GPaYRhIk4xqs29IiHk9dPCFjFPC7SFVeX0Dha3OPXouRTE_Xl2TSRFj9GP60yvoi71Mw_U6qbB6.T3tPDxza29g7U1m3ytVGog'
         }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err, err.response);
    });
};


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);

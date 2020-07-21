console.log("hey ");

let clientName = "";
const clSlct = document.getElementById("clientSeclector");
clSlct.addEventListener("onchange", e => {
  console.log(clSlct);
});

function subString(string, startpos) {
  console.log(string);
  const temString = string.substring(startpos, string.indexOf(",") + 1);
  console.log(startpos);
  return temString.substring(
    temString.indexOf(":") + 1,
    temString.indexOf(",")
  );
}

function clientStringToObj(string) {
  const statusPos = string.indexOf("status:");
  const idPos = string.indexOf("_id:");
  const namePos = string.indexOf("name:");
  const phonePos = string.indexOf("phone:");
  const emailPos = string.indexOf("email:");
  console.log(namePos);
  const status = subString(string, statusPos);
  const name = subString(string, namePos);

  var val = string.substring(statusPos, string.indexOf(","));
  // console.log(status , name)
}

const getData = async data => {
  try {
    var c = await axios.get(`http://localhost:4000/api/${data}`);
    while (c.status != 200);
    const data = [];
    c.data.forEach(function (dt) {
      data.push(dt);
    });
    console.log(data);
    return c.data;
  } catch (err) {}
};
async function updateClient(clientDetails) {
  // clientName=clientDetails;
  //  clientStringToObj(clientDetails);

  axios.get(`http://localhost:4000/api/client`).then(function (data) {
    console.log(data);
  });
  const fake = {
    status: true,
    name: "wadson",
    id: 1,
    phone: "8095674312",
    email: "gh@ht.com",
  };
}
function changeClient() {
  var val = document.getElementById("clientSeclector").value;
  updateClient(val);
}

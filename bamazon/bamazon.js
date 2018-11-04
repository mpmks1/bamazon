// require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

var con = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

// this function starts bamazon prompt by asking user to select how they will browse Bamazon
function startBamazon() {

  // We create a list prompt. The user will select their browsing preference
  inquirer.prompt([
    {
      type: "list",
      name: "byproduct",
      message: "Please select a product you would like to buy from the list below",
      choices: ["View all items", "By product name", "By price", "By Department"]
    }
    //end inquirer prompt ,then the purchase function will sort each response and call the related function
  ]).then(function (purchase) {
    var sort = purchase.byproduct
    if (sort === "View all items") {
      viewAll();
    }
    else if (sort === "By product name") {
      byProductName();
    } else if (sort === "By price") {
      byPrice();
    } else if (sort === "By Department") {
      byDepartment();
    }


  });
}; //end .then function 


  function viewAll() {
    con.query("SELECT product_name, price, department_name FROM products", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      con.end();
    }); //end con.query
  }; //end view all

function byProductName() {
  console.log("product");
}; //end by Product Name

function byPrice() {
  console.log("price");
}; //end by Price

function byDepartment() {
  // use con.query function to see if item is avail for purchase
    con.query("SELECT item_id, product_name, price, department_name FROM products", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      con.end();
    }); //end con.query


}; // end by dept


// // Starts the game!
startBamazon();



// 1) NOW THAT YOU KNOW WHAT THE USER WANTS TO DO THEY MUST BUY ITEM 
// BY PRODUCT_NAME

// 2) ONCE ITEM IS SELECTED VIA inquirer, USE .THEN FUNCTION TO CHECK IF ITEM AVAILABLE, AND THEN UPDATE ITEM NUMBER

// 3) FUNALLY ASK USER IF THEY WOULD LIKE TO BUY MORE?
  // 3A) IF YESSS, THEN CALL START BAMAZON AGAIN
  // 3B) IF NOOO, THEN END INQUIRER



// require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');
// establish connection to sql db
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
  ]).then(function (first) {
    var sort = first.byproduct
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
    //  con.end();
  }); //end con.query
}; //end view all

function byProductName() {
  console.log("product");
}; //end by Product Name

function byPrice() {
  console.log("price");
}; //end by Price

function byDepartment() {
  inquirer.prompt([
    {
      type: "list",
      name: "bydept",
      message: "Please select which dept you would like to view",
      choices: ["food", "party", "clothing",]
    }
  ]) //end inquirer prompt
    .then(function (dept) {
      var x = dept.bydept;
      con.query("SELECT item_id, product_name, price, department_name FROM products WHERE department_name = ?", [x], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        //  con.end();
        purchaseItem();
      });
    });
    //ref. to final function in which user purchases the item
}
function purchaseItem () {
inquirer.prompt([
  {
    type: "input",
    name: "purchase",
    message: "So, which item would you like to buy? (please select the coresponding item name)",
  }
]) //end inquirer prompt\
.then(function (buy) {
  var y = buy.purchase;
  con.query("SELECT * FROM products WHERE product_name = ?", [y], function (err, result, fields) {
    if (err) throw err;
   console.log("you have purchased 1: " + y);
   con.end(); 
  });
});
//   con.query("UPDATE products SET stock_quantity = stock_quantity - 1, WHERE product_name = ?",  [y], function (err, result, fields) {
//  console.log("stock quantity updated new quantity = " + result);
//  //  con.end();
//   });
} // end purchase item.


// // Starts the game!
startBamazon();



// 1) NOW THAT YOU KNOW WHAT THE USER WANTS TO DO THEY MUST BUY ITEM 
// BY PRODUCT_NAME

// 2) ONCE ITEM IS SELECTED VIA inquirer, USE .THEN FUNCTION TO CHECK IF ITEM AVAILABLE, AND THEN UPDATE ITEM NUMBER

// 3) FUNALLY ASK USER IF THEY WOULD LIKE TO BUY MORE?
  // 3A) IF YESSS, THEN CALL START BAMAZON AGAIN
  // 3B) IF NOOO, THEN END INQUIRER



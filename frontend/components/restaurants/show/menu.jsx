import React from "react";
import { withRouter } from "react-router-dom";

const Menu = (props) => {
  return (
    <>
      <div>
        <h2>Menu</h2>
      </div>
      <div>
        <div className="appetizer">
          <div>Appetizer</div>
          <div>
            <h3>SALADE NICOISE</h3>
            <h3>$26.00</h3>
            <div>
              grilled ahi tuna, haricots vert, tomatoes, hard cooked eggs,
              potatoes, peppers, cucumbers, radishes, nicoise olives, red wine
              vinaigrette
            </div>
          </div>
        </div>
        <div className="entree">
          <div>Entree</div>
          <div>
            <h3>GRILLED CHICKEN SALAD</h3>
            <h3>$22.00</h3>
            <div>
              chickpeas, cucumber, tomato, peppers, red onion, olives, lemon
              vinaigrete, cilantro, mint, lemon yogurt
            </div>
          </div>
        </div>
        <div className="dessert">
          <div>Dessert</div>
          <div>
            <h3>MAX FAMOUS CHOCOLATE MESS PARTY FOR TWO</h3>
            <h3>$18.00</h3>
            <div>
              Warm chocolate mud cake in milk chocolate ganache, piles of
              whipped cream, vanilla ice cream, chocolate chunks and toffee
              sauce. Served with strawberries, bananas and choco pops
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

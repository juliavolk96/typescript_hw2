import React from "react";

export interface Item {
  title: string;
  state: string;
  url: string;
  MainImage: { url_570xN: string };
  price: string;
  currency_code: string;
  quantity: number;
}

interface ListingProps {
  items: Item[];
}

function Listing({ items }: ListingProps) {
  return (
    <div className="item-list">
      {items.map((item, index) => {
        if (item.state === "removed") {
          return null;
        }

        return (
          <div className="item" key={index}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage ? item.MainImage.url_570xN : ""} alt={item.title} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">
                {item.title.length > 50
                  ? item.title.slice(0, 50) + "…"
                  : item.title}
              </p>
              <p className="item-price">
                {item.currency_code === "USD"
                  ? `$${parseFloat(item.price).toFixed(2)}`
                  : item.currency_code === "EUR"
                  ? `€${parseFloat(item.price).toFixed(2)}`
                  : `${parseFloat(item.price).toFixed(2)} ${item.currency_code}`}
              </p>
              <p
                className={`item-quantity ${
                  item.quantity <= 10
                    ? "level-low"
                    : item.quantity <= 20
                    ? "level-medium"
                    : "level-high"
                }`}
              >
                {item.quantity} left
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listing;

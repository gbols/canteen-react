import jwtDecode from "jwt-decode";

export const calTotal = arr => {
  return arr.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
};
export const combine = (menus, orders) => {
  let arr = [];
  orders.forEach(order => {
    let item = menus.find(menu => menu.menuid == order.menuid);
    arr.push({ ...item, quantity: order.quantity });
  });
  return arr;
};

export const mix = (orders, menus) => {
  orders.forEach(order => {
    order.info.forEach((info, index) => {
      let item = menus.find(menu => menu.menuid == info.menuid);
      if (item) info = { ...info, ...item };
      order.info.splice(index, 1, info);
    });
  });
};

export const dateParser = theDate => {
  let year, month, day;
  theDate = new Date(theDate);
  year = theDate.getFullYear();
  month = theDate.getMonth() + 1;
  day = theDate.getDate();
  return `${day}-${month}-${year}`;
};

const decoder = () => {
  const token = localStorage.getItem("token");
  if (token) jwtDecode(token);
  else null;
};
export const user = decoder();

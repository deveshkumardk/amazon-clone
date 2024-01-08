import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "paymentintent";

export const OrderTitle = (record: TOrder): string => {
  return record.paymentintent?.toString() || String(record.id);
};

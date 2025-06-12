import { Service, Container } from "typedi";
import axios from "axios";
import { F as FormService } from "../app.js";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let OrderService = class {
  constructor() {
    this.formService = Container.get(FormService);
    this.mapOrderGrid = (orders) => {
      return orders.map((order) => {
        return {
          id: order.order.id,
          name: order.user.name,
          avatar: order.user.avatar,
          type: order.user.type,
          transactionNumber: order.order.transactionNumber,
          referenceToken: order.order.referenceToken,
          totalPrice: order.order.totalPrice,
          status: order.order.status,
          currency: order.order.currency,
          isPaid: order.order.isPaid,
          paymentDate: order.order.paymentDate,
          createdAt: order.order.createdAt
        };
      });
    };
    this.getProfileList = () => {
      return axios.get(
        "order/list",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getOrderList = (...args) => {
      const query = this.formService.formQuery(...args);
      return axios.get(
        `/admin/order/list` + query,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.storeOrder = (formData) => {
      return axios.post(
        "/order",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.setPaid = (id, paymentStatus) => {
      return axios.patch(
        `/admin/order/payment/${id}`,
        { paymentStatus },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.changeStatus = (id, orderStatus) => {
      return axios.patch(
        `/admin/order/status/${id}`,
        { orderStatus },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getCount = () => {
      return axios.get(
        "/admin/order/count",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getPrice = () => {
      return axios.get(
        "/admin/order/price",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getActualPrice = (item) => {
      if (item.offer === null)
        return item.price;
      else {
        if (item.offer.isPercent)
          return item.price * (1 - item.offer.amount / 100);
        else
          return item.price - item.offer.amount;
      }
    };
    this.getTimeline = () => {
      return axios.get(
        "/admin/order/timeline",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
  }
};
OrderService = __decorateClass([
  Service()
], OrderService);
const OrderService$1 = OrderService;
export {
  OrderService$1 as O
};

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const OrderBill = () => {
  const location = useLocation();
  const order = location?.state;
  const user = useSelector((s) => s.auth.user);
  if (!order) return <p>No order</p>;

  const printBill = () => {
    const printContent = document.getElementById("order-bill");
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;

    window.location.reload(); // restore React state
  };

  return (
    <div id="order-bill" className="flex justify-center">
      <div className="w-2xl bg-white p-4 text-sm text-black print:w-full">
        {/* Header */}
        <div className="text-center mb-3">
          <img src="/logo.svg" alt="" className="w-16 mx-auto" />
          <h2 className="text-lg font-bold">Frozen Kreme</h2>
          <p className="text-xs">Order Receipt</p>
        </div>

        <hr className="my-2 border-dashed" />

        {/* Order Info */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Order ID</span>
            <span>{order.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span>Date</span>
            <span>{new Date(order.createdAt).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Name</span>
            <span>{user.first_name}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone</span>
            <span>{user.phone_number}</span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span>{user.email}</span>
          </div>
        </div>

        <hr className="my-2 border-dashed" />

        {/* Items */}
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-dashed">
              <th className="text-left py-1">Item</th>
              <th className="text-center py-1">Qty</th>
              <th className="text-right py-1">Price</th>
            </tr>
          </thead>
          <tbody>
            {order?.cartItems?.map((item, i) => (
              <tr key={i} className="border-b border-dotted">
                <td className="py-1">{item.name}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-right">
                  ₹{item.pricing.basePrice * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="my-2 border-dashed" />

        {/* Totals */}
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {order.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>₹ {order.deliveryFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Discout</span>
            <span>₹ {order.discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Platform & handling fee</span>
            <span> ₹ {order.platformFee}</span>
          </div>
          <div className="flex justify-between font-bold text-base">
            <span>Total (payable)</span>
            <span>₹ {order.totalAmount}</span>
          </div>
        </div>

        <hr className="my-2 border-dashed" />

        {/* Payment */}
        <div className="flex justify-between">
          <span>Payment</span>
          <span>{order.paymentType}</span>
        </div>

        {/* Print Button */}
        <button
          onClick={() => printBill()}
          className="mt-4 w-full rounded bg-black py-2 text-white print:hidden"
        >
          🖨 Print Bill
        </button>
      </div>
    </div>
  );
};

export default OrderBill;

"use client"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalPage = () => {
    return (
        <div className="h-screen bg-slate-950 flex justify-center items-center text-white">
            <PayPalScriptProvider options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
            }}>
            {/* <PayPalScriptProvider > */}
                <PayPalButtons 
                    style={{
                        color: "blue", 
                        layout: "horizontal",
                    }}
                    createOrder={async () => {
                        const res = await fetch('api/checkout', {
                            method: "POST"
                        })
                        const order = await res.json()
                        console.log(order)
                        return order.id;
                    }}   
                    onApprove={(data,actions) => {
                        console.log(data);
                    }}
                    onCancel={(data) => {
                        console.log("Cancelled:", data)
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default PaypalPage;

// import PayPalCheckout from '../../components/PayPalCheckout';

// const items = [
//   { name: 'Product 1', description: 'Description of product 1', price: 10, quantity: 1 },
//   // Add more items as needed
// ];

// const PaypalPage = () => {
//   return (
//     <div className="h-screen bg-slate-950 flex justify-center items-center text-white">
//       {/* Your product details */}
//       <PayPalCheckout items={items} amount={items.reduce((sum, item) => sum + item.price * item.quantity, 0)} />
//     </div>
//   );
// };

// export default PaypalPage;


// import PayPalButton from '../../components/PayPalButton';

// const Home = () => {
//   return (
//     <div className="flex p-5 justify-center items-center">
//       <h1>Pay with PayPal</h1>
//       <PayPalButton 
//         amount="10.00" />
//     </div>
//   );
// };

// export default Home;

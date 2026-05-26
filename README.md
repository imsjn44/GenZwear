# GenZwear

A modern, trend-focused full stack e-commerce platform for Gen Z fashion lovers.

## 📱 About

GenZwear is a cutting-edge e-commerce platform designed specifically for the Gen Z audience. We bring together the latest fashion trends, sustainable practices, and seamless shopping experience all in one place.

## ✨ Features

- **Trend-Focused Catalog**: Curated collection of fashion items aligned with Gen Z style preferences
- **Full Stack Platform**: Complete end-to-end e-commerce solution
- **Modern UI/UX**: Intuitive and visually appealing user interface
- **Secure Transactions**: Safe and reliable payment processing using Stripe
- **Product Search & Filtering**: Easy discovery of fashion items
- **Responsive Design**: Seamless experience across all devices

## 🛠️ Tech Stack

- **Frontend**: JavaScript, React, TailwindCSS, React Router DOM
- **Backend**: Node.js
- **Database**: MongoDB

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn


## Screenshots
---
### Sign Up and Login
<p align="center">
<img width="1906" height="742" alt="Screenshot 2026-05-26 213136" src="https://github.com/user-attachments/assets/e4aae6f7-ac4f-43fd-8d4d-f4ce384bf56a" />
<img width="1905" height="787" alt="Screenshot 2026-05-26 213151" src="https://github.com/user-attachments/assets/d276e625-19a5-434e-bfc6-4f55871367e9" />

</p>

---
---
### Homepage
<p align="center">
<img width="1893" height="867" alt="Screenshot 2026-05-26 213308" src="https://github.com/user-attachments/assets/6d400816-9233-4b91-b519-677219e8c189" />

</p>

---
## Latest Collection
<p align="center">
<img width="1877" height="871" alt="Screenshot 2026-05-26 213321" src="https://github.com/user-attachments/assets/2567f2a0-aa74-4646-8712-dce5daa00ca9" />

</p>

---
### Best seller
<p align="center">
<img width="1918" height="701" alt="Screenshot 2026-05-26 213332" src="https://github.com/user-attachments/assets/30fc3bfd-17c2-43a5-afe9-9390c42bbc24" />

</p>

------
### Product catalog

<p align="center">

<img width="1907" height="842" alt="Screenshot 2026-05-26 213407" src="https://github.com/user-attachments/assets/20c73ce8-dae2-4e7c-ac3c-59f654540a30" />

</p>

---
###  Related Products
<p align="center">
  <img width="1797" height="555" alt="Screenshot 2026-05-26 213435" src="https://github.com/user-attachments/assets/a461ad31-9fbb-4461-abb1-3bdea446a9b0" />
</p>



---
### My Cart
<p align="center">
<img width="1891" height="852" alt="Screenshot 2026-05-26 213451" src="https://github.com/user-attachments/assets/2609e54e-b76c-404a-8ad9-c8547d063707" />

</p>


---
### Place Order
<p align="center">
<img width="1896" height="823" alt="Screenshot 2026-05-26 213537" src="https://github.com/user-attachments/assets/95abedd4-060d-479b-8dd8-033ed6452e0c" />

</p>

---
### Delivery information
<p align="center">
<img width="1896" height="823" alt="Screenshot 2026-05-26 213537" src="https://github.com/user-attachments/assets/c689e3a5-7e93-4b4f-a39d-2ec3bebd4e86" />

</p>

---
### Stripe Payment
<p align="center">
<img width="1897" height="785" alt="Screenshot 2026-05-26 213557" src="https://github.com/user-attachments/assets/37afc54c-08e9-48ef-93bf-ccb21c73b207" />
<img width="1873" height="577" alt="Screenshot 2026-05-26 213616" src="https://github.com/user-attachments/assets/69e51da3-e774-4320-89ca-108c442d8fc8" />


</p>

---
### Add Item By Admin
<p align="center">
<img width="1883" height="816" alt="Screenshot 2026-05-26 213703" src="https://github.com/user-attachments/assets/ca9fb2ee-0891-4f57-a107-84b0a44fd1a8" />

</p>

---
### List Item By Admin
<p align="center">
<img width="1847" height="672" alt="Screenshot 2026-05-26 213718" src="https://github.com/user-attachments/assets/eb01d0b1-e857-4c57-b19f-3eb22ae5b511" />

</p>

---
### Order Item By Admin
<p align="center">
<img width="1867" height="682" alt="Screenshot 2026-05-26 214447" src="https://github.com/user-attachments/assets/1f940817-e4ac-43c3-abb4-17cc1df48ee8" />

</p>

---
### Update Profie
<p align="center">
<img width="608" height="517" alt="Screenshot 2026-05-26 215044" src="https://github.com/user-attachments/assets/acbdcebf-b7d4-4cf4-b8fa-dca0f6591b9e" />

</p>
---

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imsjn44/GenZwear.git
   cd genzwear
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env(backend)                
MONGODB_URI="mongodb+srv://
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
CLOUDINARY_NAME=
JWT_SECRET="genzwear"
ADMIN_EMAIL=""
ADMIN_PASSWORD=""
STRIPE_SECRET_KEY="sk_test_
EMAIL_USER=
EMAIL_PASS=
FRONTEND_URL=



VITE_BACKEND_URL="http://localhost:4000"------genzwear/frontend/


VITE_BACKEND_URL="http://localhost:4000"-------genzwear/admin/


```


   ```

  

4. Configure your database and other settings in the `.env` file

### Running the Application

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm run build
npm start
```

## 📚 Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/        # Images & static resources
│   ├── components/    # Reusable UI components
│   ├── context/       # Global state (Cart/Auth)
│   ├── pages/         # Route-based pages
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── .env



backend/
├── routes/
├── controllers/
├── models/
├── middleware/
├── config/
├── server.js


admin/
├── src/
├── components/
├── pages/
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT - see the LICENSE file for details.

## 💬 Contact & Support

For questions, suggestions, or support, please:
- Open an issue on GitHub
- Contact us at [iamsjn44@gmail.com]

## 🙏 Acknowledgments

Thanks to all our contributors and the amazing Gen Z fashion community for making GenZwear possible!

---

**Stay trendy. Shop smart. GenZwear.**

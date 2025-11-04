#  Maglo — Finance Management Dashboard

A modern, responsive **Finance Management Dashboard** built for small businesses to manage invoices, track payments, and view VAT summaries — all in one place.

![](./Detail%20Image%20-%202.png)

---

##  Project Overview

**Maglo** helps business owners manage their financial activities easily.  
Users can log in, create invoices, mark them as paid or unpaid, and get real-time financial insights through interactive charts and summaries.

---

##  Features

###  Authentication
- Implemented using **Appwrite Auth**
- Users can **sign up** and **log in**
- Redirects authenticated users to the main dashboard

###  Dashboard Overview
- View key financial metrics at a glance:
  - Total invoices created  
  - Total amount paid  
  - Pending payments  
  - Total VAT collected  
- Includes live visualizations using **Recharts**
- Fully responsive for mobile and desktop

###  Invoice Management
- Create and manage invoices with:
  - Client Name  
  - Client Email  
  - Amount (₦)  
  - VAT (%)  
  - Due Date  
  - Status (Paid / Unpaid)
- Auto-calculations:
  - **VAT Amount = Amount × (VAT / 100)**
  - **Total = Amount + VAT Amount**
- Filter invoices by status: **All / Paid / Unpaid**
- Mark invoices as **Paid**
- Edit or delete invoices

###  Payments & VAT Summary
- Real-time updates when invoices are marked as paid
- Monthly VAT summary showing:
  - Total VAT from paid invoices
  - Total payable amount
- Highlights unpaid invoices with due-date countdowns

---

##  Tech Stack

- **React**
- **Appwrite** (for Authentication)
- **Mock Data** (for Database)
- **Tailwind CSS** + **ShadCN/UI**
- **Recharts** (for charts and visual summaries)

---

##  Additional Details

- All VAT and total calculations update in **real-time**
- Includes **form validation** and **toast notifications**
- Built with **modular and reusable components**
- Managed state with **React Hooks**
- Designed using [Figma UI Kit](https://www.figma.com/design/TsA5OuR7NJfIqFGzZ2Drm1/Maglo---Financial-Management-Web-UI-Kit--Community---Copy-?node-id=0-1&t=KXXvJJb6uyiLMFt-1)

---

##  Live Demo

**[View on Netlify](https://maglo-dashboard.netlify.app/)**

---

##  Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/seyi-amusan/maglo.git
cd maglo-finance-dashboard
```

### 2. Install Dependencies
```
npm install
```
### 3. Run the Development Server
```
npm run dev
```

Visit http://localhost:5173 to view it in your browser.

##  Author
Seyi Amusan - Frontend Developer
- **[Portfolio](https://www.linkedin.com/in/seyi-amusan-414895294/)**
- **[Linkedin](https://maglo-dashboard.netlify.app/)** 
- **[Github](https://github.com/seyi-amusan)**


## 🎥 Demo Video
A 2–3 minute walkthrough:  
[](./Demo-video.mp4)

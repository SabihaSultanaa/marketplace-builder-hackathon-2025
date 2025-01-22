🛋️ Rocket Seater Furniture - Marketplace Project

📅 Day 1 Task: Establishing the Foundation for Your Marketplace Vision

📖 Overview

This repository contains the completed task for Day 1 of the Rocket Seater Furniture Marketplace project. The task focused on creating the foundational elements of a furniture-focused e-commerce platform. This includes defining business objectives, identifying the marketplace type, and designing a data schema with key entities and their relationships.

📝 Task Overview

1️⃣ Marketplace Type

🛒 Marketplace Type: General E-Commerce

🎯 Primary Purpose:
A platform connecting customers with high-quality, stylish, and customizable furniture for homes and offices. The platform prioritizes durability, modern aesthetics, and affordability.

2️⃣ Business Goals

🔧 Problem Solved:

🏡 Offering a single platform for durable and visually appealing furniture.

🎨 Meeting the needs for functionality, style, and budget.

👥 Target Audience:

🏠 Homeowners seeking furniture upgrades.

🏢 Businesses furnishing offices and workspaces.

🖌️ Interior designers and architects sourcing customizable furniture.

📦 Offered Products and Services:

🛋️ Residential and office furniture.

✏️ Customization options for materials, sizes, and designs.

🚚 Delivery and assembly services.

🛒 Furniture sets and bundles for various needs.

✨ Unique Selling Points:

✅ High-quality and durable materials.

✏️ Flexible customization options.

💰 Competitive pricing.

🎨 Wide selection of modern and classic designs.

🛠️ Easy-to-use platform with customer support.

3️⃣ Data Schema

Entities in the Marketplace:

📦 Products: ID, Name, Description, Price, Stock, Category, Material, Dimensions, Image URL, Customization Options.

📄 Orders: Order ID, Customer ID, Order Date, Product Details (Product ID, Quantity), Total Price, Status, Payment Method.

👤 Customers: Customer ID, Name, Email, Phone, Address, Registration Date.

📍 Delivery Zones: Zone ID, Zone Name, Coverage Area, Assigned Drivers, Delivery Charges.

Relationships Between Entities:

📦 Products → 📄 Orders: Products appear in multiple orders.

📄 Orders → 👤 Customers: An order belongs to one customer.

📍 Delivery Zones → 📄 Orders: Orders are linked to delivery zones based on the shipping address.

4️⃣ Diagram

Check the images folder for the data schema diagram.

🚀 Day 2: Building the Technical Foundation

🏗️ Goal

The goal for Day 2 is to transition from the business planning phase to creating a robust technical foundation for Rocket Seater Furniture. This includes system architecture design, defining workflows, crafting schemas, and specifying API requirements. The focus is on scalability, efficiency, and a seamless user experience.

🛠️ Day 2 Deliverables

1️⃣ E-Commerce Schema

📄 Developed schemas using Sanity CMS for managing:

🛋️ Product details.

👥 Customer information.

📦 Order records.

Drafted detailed schema files to ensure real-world applicability and integration ease.

2️⃣ Technical Foundation Design

🏗️ System Architecture:

🌐 Frontend: Next.js for a responsive and dynamic UI.

📦 Backend: Sanity CMS for content and data management.

🔗 Third-Party APIs: Stripe for payments, ShipEngine for shipping logistics.

🔄 Workflows:

🛋️ Product Browsing.

🛒 Order Placement.

🚚 Shipment Tracking.

⚙️ Dependencies: Identified and documented dependencies to streamline development.

3️⃣ API Documentation

Defined API requirements for:

🛋️ Product management using Sanity CMS.

💳 Secure payment processing through Stripe.

🚚 Shipment tracking via ShipEngine.

Detailed API endpoints, methods, payloads, and sample responses are included in the documentation.

🎨 System Architecture Overview

🌐 Frontend (Next.js):

A responsive interface for browsing, managing carts, and completing purchases.

📦 Sanity CMS:

Handles product catalog, order records, and customer data.

🔗 Third-Party APIs:

💳 Stripe for secure payments.

🚚 ShipEngine for shipping logistics.

Data Flow:

User actions trigger API calls to manage products, orders, and customer data via Sanity CMS.

Payment and shipment details are handled by Stripe and ShipEngine, ensuring smooth integration.

📚 Technical Documentation

Detailed documentation is available in the repository:

📄 E-Commerce Schema: Comprehensive schema designs for Sanity CMS.

🏗️ Technical Foundation: High-level system architecture and workflows.

🔗 API Integration: API documentation for integrating Stripe and ShipEngine.

🔗 GitHub Repository

Access all project files, schemas, and documentation here:
🚀 Rocket Seater Furniture Marketplace

📈 Next Steps

🔗 Begin frontend integration with Sanity CMS and third-party APIs.

🧪 Continuously test and validate workflows to ensure functionality.

🙏 Acknowledgments

Special thanks to mentors and collaborators for their guidance in shaping the technical foundation of Rocket Seater Furniture Marketplace.


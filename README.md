<<<<<<< HEAD
# Smart Parking Management System

A full-stack parking management application with features for both customers and administrators. The system allows users to find, book, and manage parking spots while providing administrators with tools to manage locations, parking lots, and monitor bookings.

## Project Structure

```
parking-app/
├── parking-backend/    # Backend Node.js/Express server
│   ├── middleware/     # Authentication middleware
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   └── utils/         # Utility functions
│
└── parking-frontend/   # React/React Native frontend
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── pages/      # Page components
    │   ├── screens/    # Screen components
    │   └── services/   # API services
    └── assets/         # Static assets
```

## Features

### Customer Features
- User authentication with MFA support
- Search available parking spots by location
- Real-time parking spot availability
- Booking management (create, view, cancel)
- Vehicle management
- Online payments
- Booking history
- Cancel bookings with refund support

### Administrator Features
- Dashboard with analytics
- Location management
- Parking lot management
- Booking oversight
- User management
- Revenue tracking
- Occupancy monitoring

## Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- MFA Support

### Frontend
- React/React Native
- Axios for API calls
- Responsive design
- Payment integration

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/mfa/setup` - Set up MFA
- `POST /api/auth/mfa/verify` - Verify MFA token

### Bookings
- `GET /api/bookings/search` - Search available parking spots
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/my-bookings` - Get user's bookings
- `POST /api/bookings/:id/cancel` - Cancel booking
- `GET /api/bookings/waiting-list` - Get waiting list

### Payments
- `POST /api/payments/create-order` - Create payment order
- `POST /api/payments/verify-payment` - Verify payment
- `GET /api/payments/history` - Get payment history
- `POST /api/payments/refund` - Process refund

### Admin
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/locations` - Get all locations
- `POST /api/admin/locations` - Create location
- `PUT /api/admin/locations/:id` - Update location
- `DELETE /api/admin/locations/:id` - Delete location
- `GET /api/admin/parking-lots` - Get all parking lots
- `POST /api/admin/parking-lots` - Create parking lot
- `PUT /api/admin/parking-lots/:id` - Update parking lot
- `DELETE /api/admin/parking-lots/:id` - Delete parking lot

## Models

### User
- Authentication details
- Personal information
- Role-based access

### Booking
- Booking details
- Vehicle information
- Payment status
- Spot allocation

### ParkingLot
- Location details
- Total/available spots
- Rates
- Operating hours

### Location
- Address details
- Associated parking lots
- Geographic coordinates

### Payment
- Transaction details
- Payment status
- Refund information

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Backend
   cd parking-backend
   npm install

   # Frontend
   cd ../parking-frontend
   npm install
   ```

3. Configure environment variables:
   - Create `.env` files in both backend and frontend directories
   - Set required environment variables (MongoDB URI, JWT secret, etc.)

4. Start the development servers:
   ```bash
   # Backend
   cd parking-backend
   npm start

   # Frontend
   cd ../parking-frontend
   npm start
   ```

## Environment Variables

### Backend
- `PORT` - Server port (default: 5001)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `MFA_SECRET` - MFA secret key

### Frontend
- `REACT_APP_API_URL` - Backend API URL
- `REACT_APP_PAYMENT_KEY` - Payment gateway key

## Security Features

- JWT-based authentication
- Multi-factor authentication (MFA)
- Input validation
- Error handling
- Payment security
- Data encryption

## Error Handling

The application implements comprehensive error handling:
- Validation errors
- Authentication errors
- Payment processing errors
- Booking conflicts
- Database errors

## Future Enhancements

1. Real-time notifications
2. Advanced analytics dashboard
3. Mobile app with QR code scanning
4. Integration with smart parking hardware
5. Automated license plate recognition
6. Dynamic pricing
7. Integration with navigation apps


# TravelTrucks

Frontend for **TravelTrucks**, a camper rental service. Users can browse the camper catalog, filter it by location, body type, engine and transmission, open a detailed page for any camper and send a booking request.

🔗 **Live demo:** [travel-trucks.vercel.app](https://travel-trucks-xi-lyart.vercel.app/)

## Features

### Home page `/`
- Hero banner with a call to action
- View Now button leads to the catalog

### Catalog `/catalog`
- List of campers loaded from the backend
- Filters applied on the backend via query parameters:
    - location (text field with city suggestions)
    - camper form (one option)
    - engine type (one option)
    - transmission (one option)
- Load More - pagination: 4 campers per request, active filters are kept
- Clear filters - resets the filters and shows the full catalog
- Loading overlay during requests
- "No campers found" state with reset buttons
- Show more - opens the camper page in a new browser tab

### Camper page `/catalog/[camperId]`
- Image gallery with thumbnails (Swiper)
- Price, rating, location and description
- Vehicle details: features and specifications
- User reviews with a five-star rating
- Booking form with validation; on success a toast notification is shown
- 404 page for a camper that does not exist

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) + TypeScript
- [TanStack Query](https://tanstack.com/query) (`useInfiniteQuery`, `useMutation`)
- [Axios](https://axios-http.com/)
- CSS Modules
- [Swiper](https://swiperjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/)

## API

Backend: [campers-api.goit.study](https://campers-api.goit.study/docs)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/campers` | Campers list with filters and pagination |
| GET | `/campers/{id}` | Camper details |
| GET | `/campers/{id}/reviews` | Camper reviews |
| POST | `/campers/{id}/booking-requests` | Booking request |

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/                  # Pages (App Router)
├── catalog/          # Catalog page
│   └── [camperId]/   # Camper details page
components/
├── camper/           # Camper page components
├── catalog/          # Catalog components (filters, card)
├── sections/         # Header, Hero
├── providers/        # TanStack Query provider
└── ui/               # Reusable UI (Button, Link, Input, Loader…)
constants/            # Labels and icons for filters
lib/api/              # API requests
types/                # TypeScript types
utils/                # Formatting helpers
```

## Developers

[Mamutova Lilia - FullStack Developer](https://www.linkedin.com/in/lilia-mamutova/)
# Shefa Connect

A modern business consulting and networking platform for [shefa.info](https://shefa.info).

**Connecting Business Leaders. Empowering Growth.**

Shefa Connect helps business owners find trusted connections, practical guidance, training, and resources to grow with confidence.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** (icons)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── about/
│   ├── who-we-help/
│   ├── services/
│   ├── business-connect/   # Connection request form
│   ├── training-academy/
│   ├── resources/
│   ├── events/
│   └── contact/
├── components/
│   ├── layout/             # Header, Footer
│   ├── ui/                 # Button, Card, SectionHeading
│   ├── forms/              # ContactForm, ConnectRequestForm
│   ├── EventCard.tsx
│   └── ResourceCard.tsx
└── lib/
    ├── types.ts            # Shared TypeScript types
    └── supabase-placeholder.ts  # Future backend integration
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, What We Do, Why Shefa, CTA |
| About | `/about` | Mission, values, community |
| Who We Help | `/who-we-help` | Audience cards |
| Services | `/services` | Service offerings |
| Business Connect | `/business-connect` | Connection categories + request form |
| Training Academy | `/training-academy` | Topics and workshop placeholders |
| Resources | `/resources` | Downloadable resource cards |
| Events | `/events` | Event placeholders |
| Contact | `/contact` | Contact form and info |

## Design System

- **Background:** Clean white with soft gray (`gray-soft`) sections
- **Text:** Dark navy (`navy-900`)
- **Accent:** Gold (`gold-500`)
- **Components:** Rounded cards, subtle shadows, professional spacing
- **Responsive:** Mobile-first layout with collapsible navigation

## Future Supabase Integration

Version 1 runs without a backend. Forms display success messages on submit. To add Supabase:

### 1. Install Supabase client

```bash
npm install @supabase/supabase-js
```

### 2. Add environment variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Configure the client

Uncomment and update the client in `lib/supabase-placeholder.ts`:

```typescript
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

### 4. Create database tables

Example schema for connection requests:

```sql
CREATE TABLE connect_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  industry TEXT,
  location TEXT,
  connection_type TEXT NOT NULL,
  business_challenge TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 5. Update form handlers

Replace the placeholder functions in `lib/supabase-placeholder.ts` with real Supabase inserts, and handle errors in `ConnectRequestForm` and `ContactForm`.

### 6. Optional enhancements

- Store events and resources in Supabase for dynamic content
- Add Row Level Security (RLS) policies
- Set up Supabase Storage for downloadable PDF resources
- Add email notifications via Supabase Edge Functions

## License

Private — Shefa Connect / shefa.info

# Events & Gallery Guide

## How to Add Events with Photos

### 1. Add Event Photos to the Repository

1. Create a folder structure in the `public` directory:
   ```
   public/
   └── events/
       ├── uipath-forward-2025/
       │   ├── photo1.jpg
       │   ├── photo2.jpg
       │   └── photo3.jpg
       └── poland-meetup-2024/
           ├── photo1.jpg
           └── photo2.jpg
   ```

2. Or host photos externally (Imgur, Google Photos, etc.) and use direct URLs

### 2. Update Events in Events.tsx

Edit `/src/components/Events.tsx` and add your events to the `events` array:

```typescript
{
  id: 'unique-id',
  title: 'Event Name',
  date: '2025',
  location: 'Location',
  description: 'Event description',
  type: 'conference' | 'meetup' | 'workshop' | 'webinar',
  role: 'speaker' | 'organizer' | 'attendee' | 'lecturer',
  link: 'https://event-website.com', // Optional
  photos: [
    '/PortfolioMZ/events/event-name/photo1.jpg',
    '/PortfolioMZ/events/event-name/photo2.jpg',
    // Or external URLs:
    // 'https://example.com/photo.jpg'
  ]
}
```

### 3. Photo Paths

**For local photos:**
- If photo is in `public/events/my-event/photo.jpg`
- Use path: `/PortfolioMZ/events/my-event/photo.jpg`
- (Note: `/PortfolioMZ/` is the base path for GitHub Pages)

**For external photos:**
- Use full URL: `https://example.com/photo.jpg`

### 4. Example Event Entry

```typescript
{
  id: 'uipath-forward-2025',
  title: 'UiPath Forward 2025',
  date: 'October 2025',
  location: 'Las Vegas, USA',
  description: 'Presented on "AI-Powered Automation: The Future of RPA" to 500+ attendees.',
  type: 'conference',
  role: 'speaker',
  link: 'https://forum.uipath.com/u/mikolaj_zielinski/activity',
  photos: [
    '/PortfolioMZ/events/uipath-forward-2025/speaking.jpg',
    '/PortfolioMZ/events/uipath-forward-2025/audience.jpg',
    '/PortfolioMZ/events/uipath-forward-2025/networking.jpg'
  ]
}
```

## Recommended Photo Sizes

- **Thumbnail size**: 400x400px (for gallery grid)
- **Full size**: 1200x1200px (for lightbox view)
- **Format**: JPG or WebP (for best performance)
- **Max file size**: Under 500KB per photo (optimize before uploading)

## Quick Photo Optimization

Use online tools like:
- [Squoosh](https://squoosh.app/) - Image compression
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression

Or command line:
```bash
# Using ImageMagick
convert input.jpg -resize 1200x1200 -quality 85 output.jpg
```

## Gallery Features

The Events component includes:
- ✅ Grid gallery layout
- ✅ Hover effects
- ✅ Event type badges
- ✅ Role badges (Speaker, Organizer, Lecturer)
- ✅ Links to event websites
- ✅ Responsive design

## Deployment

After adding events and photos:

1. Add photos to `public/events/` folder
2. Update `Events.tsx` with event data
3. Build: `npm run build`
4. Deploy: `npm run deploy`

Your events gallery will be live at:
**https://mikzielinski.github.io/PortfolioMZ/#events**


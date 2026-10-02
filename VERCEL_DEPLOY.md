# Vercel Deployment Instructions

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/visionbreathsolutions/visionbreathsolutions-website)

## Manual Deployment Steps

1. **Fork or Clone the Repository**
   ```bash
   git clone https://github.com/visionbreathsolutions/visionbreathsolutions-website.git
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

3. **Automatic Configuration**
   - Vercel will automatically detect this is a Vite project
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

## Environment Variables (if needed)
No environment variables are required for this static site.

## Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Troubleshooting

### Build Errors
- Ensure Node.js version is 16 or higher
- Check that all dependencies are properly installed
- Verify that `npm run build` works locally

### Routing Issues
- The `vercel.json` file is configured for SPA routing
- All routes will fallback to `index.html`

### Performance
- Images are optimized and cached
- Assets are automatically compressed by Vercel
- CDN distribution included

## Local Development
```bash
npm install
npm run dev
```

## Build Locally
```bash
npm run build
npm run preview
```
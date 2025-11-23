# 🚀 Portfolio Website - Complete Guide

A modern, professional portfolio website for Cloud Database Engineers with animated elements, collapsible notes tree, and responsive design.

---

## 📁 File Structure

```
your-repo-name/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── notes.json          # Knowledge base tree structure
├── README.md           # This file
└── assets/
    ├── profile.jpg     # Your profile photo
    ├── background.jpg  # Hero section background
    └── resume.pdf      # Your resume file
```

---

## 🎯 Quick Start - GitHub Pages Setup

### Step 1: Create Repository
1. Go to GitHub and create a new repository
2. Name it: `username.github.io` (replace `username` with your GitHub username)
3. Make it **Public**
4. Click "Create repository"

### Step 2: Upload Files
1. Click "uploading an existing file"
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `notes.json`
   - `README.md`

### Step 3: Create Assets Folder
1. Create a folder named `assets`
2. Upload your images:
   - `profile.jpg` - Your profile photo (should be square, 500x500px recommended)
   - `background.jpg` - Background image for hero section
   - `resume.pdf` - Your resume file

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://username.github.io`

---

## ✏️ How to Edit Content

### 📝 Edit About Me Section

**Location:** `index.html` (Lines 73-108)

```html
<!-- Change your description -->
<p class="about-text">
    YOUR DESCRIPTION HERE
</p>

<!-- Change your location/role badges -->
<div class="badges">
    <span class="badge">📍 YOUR CITY</span>
    <span class="badge">💼 YOUR ROLE</span>
    <span class="badge">☁️ YOUR SPECIALIZATION</span>
</div>

<!-- Update contact links -->
<a href="mailto:YOUR-EMAIL@gmail.com" class="btn btn-primary">

<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank">

<a href="assets/resume.pdf" class="btn btn-secondary" download>
```

**Skills Section:** (Lines 110-119)
```html
<ul>
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
    <li>Skill 4</li>
</ul>
```

---

### 🚀 Edit Projects Section

**Location:** `script.js` (Lines 8-26)

```javascript
const projectsData = [
  {
    title: "Your Project Title",
    description: "Project description here",
    icon: "database"  // Options: database, server, cloud, code, zap, shield
  },
  {
    title: "Another Project",
    description: "Description...",
    icon: "server"
  },
  // Add more projects...
];
```

**Available Icons:**
- `database` - Database symbol
- `server` - Server/rack symbol
- `cloud` - Cloud symbol
- `code` - Code brackets
- `zap` - Lightning bolt
- `shield` - Security shield
- `cpu` - Processor chip
- `network` - Network nodes

---

### 🎓 Edit Certifications

**Location:** `script.js` (Lines 28-36)

```javascript
const certificationsData = [
  "Certification Name 1 (Year)",
  "Certification Name 2 (Year)",
  "Certification Name 3 (Year)",
  // Add more certifications...
];
```

---

### 📚 Edit Notes Section (MOST IMPORTANT)

**Location:** `notes.json`

The notes section uses a tree structure with folders and files.

#### Structure Explanation:

```json
[
  {
    "name": "Folder Name",          // Top-level folder
    "children": [                   // Items inside this folder
      {
        "title": "Link Title",      // A clickable link
        "href": "https://..."       // URL to your note
      },
      {
        "title": "Sub-folder",      // Nested folder
        "children": [               // Items inside sub-folder
          {
            "title": "Note 1",
            "href": "https://..."
          }
        ]
      }
    ]
  }
]
```

#### Examples:

**Add a new top-level folder:**
```json
{
  "name": "New Folder Name",
  "children": [
    {
      "title": "First Note",
      "href": "https://your-link.com"
    }
  ]
}
```

**Add a link to existing folder:**
```json
{
  "name": "DBA Essentials",
  "children": [
    {
      "title": "Existing Note",
      "href": "https://..."
    },
    {
      "title": "NEW NOTE HERE",           // Add this
      "href": "https://your-new-link.com"  // Add this
    }
  ]
}
```

**Add nested folders (2 levels deep):**
```json
{
  "name": "Main Folder",
  "children": [
    {
      "title": "Sub-folder",
      "children": [
        {
          "title": "Deep Note",
          "href": "https://..."
        }
      ]
    }
  ]
}
```

**Delete a folder:**
Simply remove the entire `{ }` block for that folder.

**Rename a folder:**
Change the `"name"` or `"title"` value.

---

### 📧 Edit Contact Information

**Location:** `index.html` (Lines 168-193)

```html
<!-- Email -->
<div class="contact-item">
    <i data-lucide="mail"></i>
    <span>YOUR-EMAIL@gmail.com</span>
</div>

<!-- Phone -->
<div class="contact-item">
    <i data-lucide="phone"></i>
    <span>+91 YOUR-PHONE</span>
</div>

<!-- Social Links -->
<a href="https://YOUR-BLOG.com" target="_blank">
    <i data-lucide="globe"></i>
    Portfolio / Blog
</a>

<a href="https://github.com/YOUR-USERNAME" target="_blank">
    <i data-lucide="github"></i>
    GitHub
</a>
```

---

## 🎨 Customization Tips

### Change Color Scheme

**Location:** `styles.css` (Lines 9-17)

```css
:root {
  --bg-primary: #0a0e17;           /* Main background */
  --bg-secondary: #161823;         /* Cards background */
  --text-primary: #e2e8f0;         /* Main text */
  --text-muted: #94a3b8;           /* Secondary text */
  --accent-blue: #60a5fa;          /* Primary accent */
  --accent-purple: #a78bfa;        /* Secondary accent */
}
```

**Popular Color Schemes:**

**Green Tech:**
```css
--accent-blue: #10b981;    /* Green */
--accent-purple: #14b8a6;  /* Teal */
```

**Orange Energy:**
```css
--accent-blue: #f59e0b;    /* Orange */
--accent-purple: #ef4444;  /* Red */
```

**Purple Galaxy:**
```css
--accent-blue: #8b5cf6;    /* Purple */
--accent-purple: #ec4899;  /* Pink */
```

### Change Profile Photo

1. Save your photo as `profile.jpg` (500x500px recommended)
2. Upload to `assets/` folder
3. Or change the path in `index.html` (Line 61):
   ```html
   <img src="assets/YOUR-PHOTO-NAME.jpg" alt="Mohammad Suhail">
   ```

### Change Background Image

1. Save background image as `background.jpg`
2. Upload to `assets/` folder
3. Or change in `styles.css` (Line 146):
   ```css
   background-image: url('assets/YOUR-BACKGROUND.jpg');
   ```

---

## 🐛 Troubleshooting

### Notes section not showing
- Make sure `notes.json` is in the root folder
- Check for JSON syntax errors (commas, brackets)
- Open browser console (F12) to see errors

### Images not loading
- Check file paths match exactly (case-sensitive)
- Make sure images are in `assets/` folder
- Try using full GitHub URLs:
  ```
  https://raw.githubusercontent.com/username/repo/main/assets/profile.jpg
  ```

### Icons not showing
- Make sure this line is in `index.html`:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```

### Site not updating
1. Make sure you committed changes
2. Wait 1-2 minutes for GitHub Pages to rebuild
3. Clear browser cache (Ctrl + Shift + R)

---

## 📝 Editing Workflow

### Quick Edit on GitHub:
1. Go to your repository
2. Click on file (e.g., `notes.json`)
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down, add commit message
6. Click "Commit changes"
7. Wait 1-2 minutes and refresh your site

### Edit Locally:
1. Clone repository: `git clone https://github.com/username/username.github.io`
2. Edit files in your code editor
3. Test locally by opening `index.html` in browser
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

---

## 🎯 Common Tasks Checklist

### Initial Setup:
- [ ] Replace profile photo
- [ ] Replace background image
- [ ] Update name and title
- [ ] Update email and phone
- [ ] Update social links
- [ ] Upload resume PDF
- [ ] Update about me text
- [ ] Update skills list

### Content Updates:
- [ ] Add/remove projects in `script.js`
- [ ] Add/remove certifications in `script.js`
- [ ] Update notes structure in `notes.json`
- [ ] Update contact information

### Design Customization:
- [ ] Change color scheme in `styles.css`
- [ ] Adjust fonts (if desired)
- [ ] Modify spacing/layout (if needed)

---

## 💡 Pro Tips

1. **Test Locally First:** Open `index.html` in your browser before pushing to GitHub
2. **Use Valid JSON:** Check your `notes.json` at [JSONLint.com](https://jsonlint.com)
3. **Optimize Images:** Compress images before uploading (use [TinyPNG.com](https://tinypng.com))
4. **Regular Backups:** Download your files regularly as backup
5. **Mobile Testing:** Check your site on phone after updates

---

## 🆘 Need Help?

### JSON Syntax Errors
- Every `{` needs a closing `}`
- Every `[` needs a closing `]`
- Items in arrays need commas BETWEEN them (not after last one)
- Strings need quotes: `"like this"`

### File Path Errors
- Use forward slashes: `assets/photo.jpg` (not `assets\photo.jpg`)
- Match case exactly: `Profile.jpg` ≠ `profile.jpg`
- No spaces in filenames: Use `my-photo.jpg` not `my photo.jpg`

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors (F12)
2. Validate your JSON at [JSONLint.com](https://jsonlint.com)
3. Review this README carefully
4. Check GitHub Pages settings

---

## 🎉 You're All Set!

Your portfolio is ready to impress! Remember to:
- Update content regularly
- Add new projects and certifications
- Keep notes organized
- Share your portfolio link with employers

**Your Portfolio URL:** `https://username.github.io`

---

*Built with ❤️ by Mohammad Suhail*

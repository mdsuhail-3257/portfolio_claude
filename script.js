/* ============================================
   PORTFOLIO JAVASCRIPT
   All interactive functionality
   Author: Mohammad Suhail
   ============================================ */

/* ==========================================
   PROJECTS DATA
   EDIT THIS: Add, remove, or modify your projects
   ========================================== */
const projectsData = [
  {
    title: "Performance Tuning – Large Databases",
    description: "Optimized queries and indexing for databases up to 40 TB, reducing latency and stabilizing production workloads.",
    icon: "database"
  },
  {
    title: "Replication & High Availability",
    description: "Designed and implemented streaming & logical replication topologies with comprehensive failover plans.",
    icon: "server"
  },
  {
    title: "Automation & Monitoring",
    description: "Built Python & Bash automation for backups, monitoring, and disaster recovery drills.",
    icon: "cloud"
  }
];

/* ==========================================
   CERTIFICATIONS DATA
   EDIT THIS: Add, remove, or modify your certifications
   ========================================== */
const certificationsData = [
  "AWS Solutions Architect – Associate (2025)",
  "AWS Cloud Practitioner (2023)",
  "PostgreSQL Essentials – LinkedIn Learning",
  "Database Administration Fundamentals"
];

/* ==========================================
   LOAD NOTES FROM JSON FILE
   Fetches and displays the tree structure
   ========================================== */
async function loadNotes() {
  try {
    // Fetch notes.json file
    const response = await fetch('notes.json');
    if (!response.ok) throw new Error('Failed to load notes');
    
    const notesData = await response.json();
    const notesTree = document.getElementById('notesTree');
    
    // Clear existing content
    notesTree.innerHTML = '';
    
    // Render each top-level node
    notesData.forEach(node => {
      const nodeElement = createTreeNode(node);
      notesTree.appendChild(nodeElement);
    });
    
  } catch (error) {
    console.error('Error loading notes:', error);
    document.getElementById('notesTree').innerHTML = 
      '<p style="color: var(--text-muted); padding: 1rem;">Unable to load notes. Please ensure notes.json exists.</p>';
  }
}

/* ==========================================
   CREATE TREE NODE (RECURSIVE)
   Builds the collapsible tree structure
   ========================================== */
function createTreeNode(node, level = 0) {
  const container = document.createElement('div');
  container.className = 'tree-node';
  
  // If node has children, it's a folder
  if (node.children && node.children.length > 0) {
    // Create folder element
    const folder = document.createElement('div');
    folder.className = 'tree-folder';
    
    // Add folder icon (chevron)
    const chevron = document.createElement('i');
    chevron.className = 'chevron-icon';
    chevron.setAttribute('data-lucide', 'chevron-right');
    
    // Add folder icon
    const folderIcon = document.createElement('i');
    folderIcon.className = 'folder-icon';
    folderIcon.setAttribute('data-lucide', 'folder');
    
    // Add folder name
    const folderName = document.createElement('span');
    folderName.textContent = node.name || node.title;
    
    folder.appendChild(chevron);
    folder.appendChild(folderIcon);
    folder.appendChild(folderName);
    
    // Create children container
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'tree-children';
    
    // Render all children
    node.children.forEach(child => {
      const childNode = createTreeNode(child, level + 1);
      childrenContainer.appendChild(childNode);
    });
    
    // Add click handler for folder toggle
    folder.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFolder(folder, childrenContainer);
    });
    
    container.appendChild(folder);
    container.appendChild(childrenContainer);
    
  } 
  // If node has href, it's a file/link
  else if (node.href) {
    const link = document.createElement('a');
    link.className = 'tree-link';
    link.href = node.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Add file icon
    const fileIcon = document.createElement('i');
    fileIcon.className = 'file-icon';
    fileIcon.setAttribute('data-lucide', 'file-text');
    
    // Add link text
    const linkText = document.createElement('span');
    linkText.textContent = node.title;
    
    link.appendChild(fileIcon);
    link.appendChild(linkText);
    container.appendChild(link);
  }
  
  return container;
}

/* ==========================================
   TOGGLE FOLDER OPEN/CLOSE
   Handles folder expansion with animations
   ========================================== */
function toggleFolder(folderElement, childrenContainer) {
  const isOpen = folderElement.classList.contains('open');
  
  if (isOpen) {
    // Close folder
    folderElement.classList.remove('open');
    childrenContainer.classList.remove('open');
  } else {
    // Open folder with animation
    folderElement.classList.add('opening');
    folderElement.classList.add('open');
    childrenContainer.classList.add('open');
    
    // Remove 'opening' class after animation
    setTimeout(() => {
      folderElement.classList.remove('opening');
    }, 500);
  }
  
  // Refresh Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ==========================================
   RENDER PROJECTS
   Displays project cards from data
   ========================================== */
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projectsData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Create icon container
    const iconContainer = document.createElement('div');
    iconContainer.className = 'project-icon';
    
    // Add Lucide icon
    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', project.icon);
    iconContainer.appendChild(icon);
    
    // Create title
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    // Create description
    const description = document.createElement('p');
    description.textContent = project.description;
    
    // Assemble card
    card.appendChild(iconContainer);
    card.appendChild(title);
    card.appendChild(description);
    
    projectsGrid.appendChild(card);
  });
  
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ==========================================
   RENDER CERTIFICATIONS
   Displays certification badges from data
   ========================================== */
function renderCertifications() {
  const certsGrid = document.getElementById('certsGrid');
  
  certificationsData.forEach(cert => {
    const badge = document.createElement('span');
    badge.className = 'cert-badge';
    badge.textContent = cert;
    certsGrid.appendChild(badge);
  });
}

/* ==========================================
   PARALLAX EFFECT FOR FLOATING KEYWORDS
   Mouse movement creates depth effect
   ========================================== */
function initParallax() {
  const hero = document.querySelector('.hero');
  const keywords = document.querySelectorAll('.keyword');
  
  if (!hero || keywords.length === 0) return;
  
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    
    keywords.forEach((keyword, index) => {
      const speed = parseFloat(keyword.getAttribute('data-speed')) || 10;
      const x = mouseX * speed;
      const y = mouseY * speed;
      
      keyword.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
  
  // Reset on mouse leave
  hero.addEventListener('mouseleave', () => {
    keywords.forEach(keyword => {
      keyword.style.transform = 'translate(0, 0)';
    });
  });
}

/* ==========================================
   SMOOTH SCROLL FOR NAVIGATION LINKS
   ========================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ==========================================
   NAVBAR SCROLL EFFECT
   Changes navbar appearance on scroll
   ========================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 14, 23, 0.95)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.background = 'rgba(10, 14, 23, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });
}

/* ==========================================
   SET CURRENT YEAR IN FOOTER
   ========================================== */
function setCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ==========================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   Animates elements when they come into view
   ========================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

/* ==========================================
   MOBILE MENU TOGGLE
   ========================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
}

/* ==========================================
   INITIALIZE ALL FUNCTIONALITY
   Called when DOM is ready
   ========================================== */
function init() {
  console.log('Initializing portfolio...');
  
  // Load content
  renderProjects();
  renderCertifications();
  loadNotes();
  
  // Initialize interactions
  initParallax();
  initSmoothScroll();
  initNavbarScroll();
  initScrollAnimations();
  initMobileMenu();
  setCurrentYear();
  
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  console.log('Portfolio initialized successfully!');
}

/* ==========================================
   START WHEN DOM IS READY
   ========================================== */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

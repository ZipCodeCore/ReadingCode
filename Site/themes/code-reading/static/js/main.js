// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-open');
            navToggle.classList.toggle('nav-toggle-open');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Code block copy functionality
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.textContent);
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
                button.textContent = 'Failed';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }
        });
        
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
    
    // Progress tracking (simple localStorage-based)
    const exampleLinks = document.querySelectorAll('.example-link');
    exampleLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (localStorage.getItem(`read-${href}`)) {
            link.parentElement.parentElement.classList.add('example-completed');
        }
        
        link.addEventListener('click', () => {
            localStorage.setItem(`read-${href}`, 'true');
        });
    });
});

// Add CSS for mobile navigation and copy button
const style = document.createElement('style');
style.textContent = `
    .nav-menu-open {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-top: 1px solid #e2e8f0;
    }
    
    .nav-toggle-open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle-open span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle-open span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .copy-button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(255, 255, 255, 0.1);
        color: #e2e8f0;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        cursor: pointer;
        transition: background 0.2s;
    }
    
    .copy-button:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .example-completed {
        opacity: 0.7;
    }
    
    .example-completed .example-title::after {
        content: " ✓";
        color: #48bb78;
    }
`;
document.head.appendChild(style);


            // Fade-in on scroll
            const faders=document.querySelectorAll('.fade-in');
            const appearOnScroll=new IntersectionObserver((entries,observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            },{threshold: 0.3});
            faders.forEach(fader => appearOnScroll.observe(fader));

            // Particle effect - White particles
            const canvas=document.getElementById('particles');
            const ctx=canvas.getContext('2d');
            canvas.width=window.innerWidth;
            canvas.height=window.innerHeight;
            const particles=[];
            for(let i=0;i<120;i++) {
                particles.push({x: Math.random()*canvas.width,y: Math.random()*canvas.height,r: Math.random()*2+1,dx: (Math.random()-0.5)*1,dy: (Math.random()-0.5)*1});
            }
            function animate() {
                ctx.clearRect(0,0,canvas.width,canvas.height);
                particles.forEach(p => {
                    ctx.beginPath();
                    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
                    ctx.fillStyle='rgba(255,255,255,0.7)';
                    ctx.fill();
                    p.x+=p.dx; p.y+=p.dy;
                    if(p.x<0||p.x>canvas.width) p.dx*=-1;
                    if(p.y<0||p.y>canvas.height) p.dy*=-1;
                });
                requestAnimationFrame(animate);
            }
            animate();
            window.addEventListener('resize',() => {canvas.width=window.innerWidth; canvas.height=window.innerHeight;});

import React, { useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const StarBackground = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const starGeometry = new THREE.BufferGeometry();
        const starsCount = 2000;
        const starPositions = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount; i++) {
            starPositions[i * 3] = (Math.random() - 0.5) * 100;
            starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
            starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);

        function animateStars() {
            starField.rotation.y += 0.001;
            renderer.render(scene, camera);
            requestAnimationFrame(animateStars);
        }
        animateStars();

        gsap.fromTo('h1', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'bounce.out' });
        gsap.fromTo('h2', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 });
        gsap.fromTo('li', { opacity: 0 }, { opacity: 1, duration: 1.5, stagger: 0.3, ease: 'power3.out', delay: 1 });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        camera.position.z = 5;

        return () => {
            renderer.domElement.remove();
        };
    }, []);

    return null;
};

export default StarBackground;

#!/usr/bin/env node

/**
 * Migration script: AOS to custom animation system
 * Converts data-aos attributes to data-animate
 */

import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

const MIGRATION_MAP = {
    'data-aos="fade-up"': 'data-animate="fade-up"',
    'data-aos="fade-down"': 'data-animate="fade-down"',
    'data-aos="fade-left"': 'data-animate="fade-left"',
    'data-aos="fade-right"': 'data-animate="fade-right"',
    'data-aos="zoom-in"': 'data-animate="zoom-in"',
    'data-aos="fade"': 'data-animate="fade"',
    'data-aos-delay': 'data-delay',
};

// Find all .astro files
const files = globSync('src/**/*.astro');

let totalChanges = 0;

files.forEach((file) => {
    let content = readFileSync(file, 'utf-8');
    let changed = false;

    Object.entries(MIGRATION_MAP).forEach(([oldAttr, newAttr]) => {
        if (content.includes(oldAttr)) {
            content = content.replaceAll(oldAttr, newAttr);
            changed = true;
            totalChanges++;
        }
    });

    if (changed) {
        writeFileSync(file, content, 'utf-8');
        console.log(`✅ Updated: ${file}`);
    }
});

console.log(`\n🎉 Migration complete! ${totalChanges} changes across ${files.length} files.`);

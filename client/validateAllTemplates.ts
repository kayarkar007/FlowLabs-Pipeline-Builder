import { templates } from './src/data/templates';
import { FlowExecutor } from './src/engine/FlowExecutor';

async function validate() {
    console.log(`Starting validation for ${templates.length} templates...\n`);
    let passCount = 0;
    let failCount = 0;

    for (const template of templates) {
        console.log(`Testing: [${template.category}] ${template.name}...`);
        try {
            const executor = new FlowExecutor(template.nodes as any, template.edges as any);
            const result = await executor.execute();

            // Basic sanity checks
            if (result.logs.length === 0 && template.nodes.some(n => n.type === 'console' || n.type === 'output')) {
                console.warn(`  ⚠ Warning: No logs generated but output/console nodes exist.`);
            }

            // Specific result checks for complex ones
            if (template.id === 'advanced-0') { // Fibonacci Array
                const lastLog = result.logs[result.logs.length - 1]; // This might be "Pushing next..."
                // Check context directly
                const context = result.context as any;
                if (Array.isArray(context.arr) && context.arr.length === 10 && context.arr[9] === 34) {
                    console.log(`  ✅ Fibonacci Result Verified: ${context.arr[9]}`);
                } else {
                    throw new Error(`Fibonacci failed. Found: ${JSON.stringify(context.arr)}`);
                }
            }

            if (template.id === 'advanced-2') { // Prime Check (13)
                const context = result.context as any;
                if (context.isP === true) {
                    console.log(`  ✅ Prime Check (13) Verified: True`);
                } else {
                    throw new Error(`Prime check failed for 13.`);
                }
            }

            if (template.id === 'medium-0') { // Factorial (5)
                const context = result.context as any;
                if (context.f === 120) {
                    console.log(`  ✅ Factorial (5) Verified: 120`);
                } else {
                    throw new Error(`Factorial failed. Found: ${context.f}`);
                }
            }

            console.log(`  ✅ PASS`);
            passCount++;
        } catch (e) {
            console.log(`  ❌ FAIL: ${e}`);
            failCount++;
        }
    }

    console.log(`\nValidation Summary:`);
    console.log(`Total: ${templates.length}`);
    console.log(`Passed: ${passCount}`);
    console.log(`Failed: ${failCount}`);

    if (failCount > 0) process.exit(1);
}

validate();

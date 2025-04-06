const assert = require("assert");
const { type } = require("os");
const { title } = require("process");

function validateQRData(data) {
    if (!data || typeof data !== "string") {
        throw new Error("QR data must be a non-empty string.");
    }

    const parts = data.split(":");
    if (parts.length !== 2) {
        throw new Error("QR data must follow the format 'Title:Category'.");
    }

    const [title, category] = parts.map(s => s.trim());

    if (!title) throw new Error("Title cannot be empty.");
    if (!category) throw new Error("Category cannot be empty.");

    return { title, category };
}
console.log("Running QR validation tests...\n");

function testCase(description, fn) {
    try {
        fn();
        console.log(`✅ PASS: ${description}`);
    } catch (err) {
        console.error(`❌ FAIL: ${description}`);
        console.error(`   → ${err.message}`);
    }
}

//Valid QR code tests
testCase("Valid QR - Flushable Drain", () => {
    assert.deepStrictEqual(validateQRData("Taking Care of Your Flushable Drain Tubes:post-surgery"), { title: "Taking Care of Your Flushable Drain Tubes", category: "post-surgery" });
});
testCase("Valid QR - Gravity Drain", () => {
    assert.deepStrictEqual(validateQRData("Gravity Drain:post-surgery"), { title: "Gravity Drain", category: "post-surgery" });
});

//Invalid QR code tests - Edge cases
testCase("Invalid - No colon separator", () => {
    assert.throws(() => validateQRData("NoColonSeparator"), /format/);
});
testCase("Invalid - Just Colon", () => {
    assert.throws(() => validateQRData(":"), /Title cannot be empty/);
});
testCase("Invalid - Only title", () => {
    assert.throws(() => validateQRData("OnlyTitle:"), /Category cannot be empty/);
});
testCase("Invalid - Only category", () => {
    assert.throws(() => validateQRData(":OnlyCategory"), /Title cannot be empty/);
});
testCase("Invalid - Empty string", () => {
    assert.throws(() => validateQRData(""), /QR data must be a non-empty string/);
});
testCase("Invalid - Null input", () => {
    assert.throws(() => validateQRData(null), /QR data must be a non-empty string/);
});
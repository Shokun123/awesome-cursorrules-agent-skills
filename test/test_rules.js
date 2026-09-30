import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

test('Awesome CursorRules - Integrity Tests', async (t) => {
  await t.test('rules directory has valid markdown rule files', () => {
    const rulesDir = path.join(process.cwd(), 'rules');
    assert.ok(fs.existsSync(rulesDir));
    const files = fs.readdirSync(rulesDir).filter(f => f.endsWith('.md'));
    assert.ok(files.length >= 2, 'Should contain at least 2 rules');
    for (const f of files) {
      const content = fs.readFileSync(path.join(rulesDir, f), 'utf-8');
      assert.ok(content.length > 50, `Rule ${f} should have substantive content`);
    }
  });

  await t.test('enterprise superpack JSON contains Binance Pay UID 1049392123', () => {
    const packPath = path.join(process.cwd(), 'assets', 'cursorrules_enterprise_superpack.json');
    assert.ok(fs.existsSync(packPath));
    const data = JSON.parse(fs.readFileSync(packPath, 'utf-8'));
    assert.equal(data.payoutDestination.binanceUid, '1049392123');
    assert.equal(data.payoutDestination.username, 'User-79a91');
  });
});

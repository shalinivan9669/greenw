export function formatBlockName(block) {
  const match = block.match(/block(\d+)/i);
  if (match) {
    return `\u0411\u043B\u043E\u043A ${match[1]}`; // "Блок" in Russian
  }
  return block;
}

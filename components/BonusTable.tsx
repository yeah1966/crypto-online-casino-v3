import React from 'react';

interface BonusTableProps {
  bonuses: { casino: string; bonus: string; code?: string; link: string }[];
}

const BonusTable: React.FC<BonusTableProps> = ({ bonuses }) => (
  <table className="w-full bg-white rounded-xl shadow mb-8 text-left overflow-hidden">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-3 px-4">Casino</th>
        <th className="py-3 px-4">Bonus</th>
        <th className="py-3 px-4">Bonuscode</th>
        <th className="py-3 px-4">Link</th>
      </tr>
    </thead>
    <tbody>
      {bonuses.map((b, i) => (
        <tr key={i} className="border-t">
          <td className="py-2 px-4 font-medium">{b.casino}</td>
          <td className="py-2 px-4">{b.bonus}</td>
          <td className="py-2 px-4">{b.code || '-'}</td>
          <td className="py-2 px-4">
            <a href={b.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Claim</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BonusTable;

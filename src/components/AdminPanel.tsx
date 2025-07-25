
import { useState } from 'react';
import { X, Calendar, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminPanelProps {
  onClose: () => void;
  nonWorkingDays: string[];
  setNonWorkingDays: (days: string[]) => void;
}

const AdminPanel = ({ onClose, nonWorkingDays, setNonWorkingDays }: AdminPanelProps) => {
  const [selectedDate, setSelectedDate] = useState('');

  const addNonWorkingDay = () => {
    if (selectedDate && !nonWorkingDays.includes(selectedDate)) {
      setNonWorkingDays([...nonWorkingDays, selectedDate]);
      setSelectedDate('');
    }
  };

  const removeNonWorkingDay = (date: string) => {
    setNonWorkingDays(nonWorkingDays.filter(day => day !== date));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('mk-MK', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar size={24} />
              <h2 className="text-xl font-bold">Администрација на салон</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-rose-200 transition-colors p-1 rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Додади нов неработен ден</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Изберете датум
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 border border-rose-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <Button
                onClick={addNonWorkingDay}
                disabled={!selectedDate}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus size={16} className="mr-2" />
                Додади неработен ден
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Тековни неработни денови</h3>
            {nonWorkingDays.length === 0 ? (
              <p className="text-gray-500 text-center py-8 bg-gray-50 rounded-lg">
                Нема додадени неработни денови
              </p>
            ) : (
              <div className="space-y-2">
                {nonWorkingDays
                  .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
                  .map((date) => (
                    <div
                      key={date}
                      className="flex items-center justify-between p-3 bg-rose-50 rounded-lg border border-rose-100"
                    >
                      <div className="flex items-center space-x-3">
                        <Calendar size={16} className="text-rose-500" />
                        <span className="text-gray-800 font-medium">
                          {formatDate(date)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeNonWorkingDay(date)}
                        className="text-rose-500 hover:text-rose-700 transition-colors p-1 rounded-full hover:bg-rose-100"
                        title="Отстрани"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 p-6">
          <Button
            onClick={onClose}
            className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Затвори
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

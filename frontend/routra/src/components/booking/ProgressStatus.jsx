import { CircleCheck as CheckCircle, Clock, Circle as XCircle } from 'lucide-react';

export default function ProgressStatus({ status, guideName, location }) {
  const getStatusColor = () => {
    if (status === 'accepted') return 'bg-green-50 border-green-200';
    if (status === 'declined') return 'bg-red-50 border-red-200';
    return 'bg-yellow-50 border-yellow-200';
  };

  const getStatusIcon = () => {
    if (status === 'accepted') return <CheckCircle className="text-green-600" size={24} />;
    if (status === 'declined') return <XCircle className="text-red-600" size={24} />;
    return <Clock className="text-yellow-600 animate-pulse" size={24} />;
  };

  const getStatusText = () => {
    if (status === 'accepted') return 'Guide Accepted!';
    if (status === 'declined') return 'Booking Declined';
    return 'Waiting for Confirmation...';
  };

  return (
    <div className={`rounded-2xl border-2 p-5 ${getStatusColor()}`}>
      <div className="flex items-start gap-4">
        <div>{getStatusIcon()}</div>
        <div className="flex-1">
          <h3 className={`font-bold text-base ${status === 'accepted' ? 'text-green-800' : status === 'declined' ? 'text-red-800' : 'text-yellow-800'}`}>
            {getStatusText()}
          </h3>
          <p className={`text-sm mt-1 ${status === 'accepted' ? 'text-green-700' : status === 'declined' ? 'text-red-700' : 'text-yellow-700'}`}>
            {guideName} at {location}
          </p>
          {status === 'pending' && (
            <div className="mt-2.5 w-full h-1.5 bg-yellow-200 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-600 rounded-full w-2/3 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

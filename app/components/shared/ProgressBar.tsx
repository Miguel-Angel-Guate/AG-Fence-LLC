const Progress = ({ percentage, colorClass }: { percentage: number, colorClass: string }) => {
    // Ensure percentage is within 0 to 100
    const progressWidth = Math.min(100, Math.max(0, percentage));

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-blue">
            <div
                className={`h-2.5 rounded-full ${colorClass || 'bg-blue-500'}`}
                style={{ width: `${progressWidth}%` }}>
            </div>
        </div>
    );
};

export default Progress;
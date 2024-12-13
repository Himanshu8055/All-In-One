
function Dashboard() {
    const CardData = [
        {
            imgUrl: 'https://s3-alpha.figma.com/hub/file/2207105442/bc767e31-c51f-4282-96bd-db916192efb2-cover.png',
            imgTitle: 'Calculator',
            imgDescription: 'Welcome to Online Calculator! We have a range of free, easy to use calculators, conversion tools, and much more!',
            cardLink: '',
        },
        {
            imgUrl: 'https://s3-alpha.figma.com/hub/file/2207105442/bc767e31-c51f-4282-96bd-db916192efb2-cover.png',
            imgTitle: 'Calculator',
            imgDescription: 'Welcome to Online Calculator! We have a range of free, easy to use calculators, conversion tools, and much more!',
            cardLink: '',
        },
        {
            imgUrl: 'https://s3-alpha.figma.com/hub/file/2207105442/bc767e31-c51f-4282-96bd-db916192efb2-cover.png',
            imgTitle: 'Calculator',
            imgDescription: 'Welcome to Online Calculator! We have a range of free, easy to use calculators, conversion tools, and much more!',
            cardLink: '',
        },
        {
            imgUrl: 'https://s3-alpha.figma.com/hub/file/2207105442/bc767e31-c51f-4282-96bd-db916192efb2-cover.png',
            imgTitle: 'Calculator',
            imgDescription: 'Welcome to Online Calculator! We have a range of free, easy to use calculators, conversion tools, and much more!',
            cardLink: '',
        },
        {
            imgUrl: 'https://s3-alpha.figma.com/hub/file/2207105442/bc767e31-c51f-4282-96bd-db916192efb2-cover.png',
            imgTitle: 'Calculator',
            imgDescription: 'Welcome to Online Calculator! We have a range of free, easy to use calculators, conversion tools, and much more!',
            cardLink: '',
        },
        {
            imgUrl: 'https://s3-alpha.figma.com/hub/file/2207105442/bc767e31-c51f-4282-96bd-db916192efb2-cover.png',
            imgTitle: 'Calculator',
            imgDescription: 'Welcome to Online Calculator! We have a range of free, easy to use calculators, conversion tools, and much more!',
            cardLink: '',
        },
    ];

    return (
        <div className="text-center place-items-center grid grid-cols-2 sm:grid-col-3">
        {CardData.map((card, index) => {
            return (
                <div
                    key={index}
                    className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 m-4"
                >
                    <img
                        src={card.imgUrl || 'https://via.placeholder.com/300'} // Default placeholder image
                        alt={card.imgTitle || 'Default Title'}
                        className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800">{card.imgTitle || 'Card Title'}</h2>
                        <p className="text-sm text-gray-600 mt-2">{card.imgDescription || 'This is a description of the card content.'}</p>
                        <a
                            href={card.cardLink || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-medium"
                        >
                            Click to Visit
                        </a>
                    </div>
                </div>
            );
        })}
    </div>
    
    )
}

export default Dashboard
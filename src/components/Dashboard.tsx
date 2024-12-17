import { Link } from "react-router-dom";

function Dashboard() {
    const CardData = [
        {
            imgUrl: 'https://s3-alpha.figma.com/hub/file/2207105442/bc767e31-c51f-4282-96bd-db916192efb2-cover.png',
            title: 'Calculator',
            description: 'A simple and user-friendly calculator to perform basic arithmetic operations like addition, subtraction, multiplication, and division.',
            cardLink: '/calculator',
        },
        {
            imgUrl: 'https://th.bing.com/th/id/OIP.W5LUJk1JAZyXzR25P7WZ4QAAAA?rs=1&pid=ImgDetMain',
            title: 'Weather App',
            description: 'Get real-time weather updates, including temperature, humidity, and conditions, for your current location or any city around the world.',
            cardLink: '/weather',
        }
    ];

    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {CardData.map((card, index) => {
                return (
                    <div
                        key={index}
                        className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 m-4"
                    >
                        <img
                            src={card.imgUrl || 'https://via.placeholder.com/300'} // Default placeholder image
                            alt={card.title || 'Default Title'}
                            className="h-40 w-full object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800">{card.title || 'Card Title'}</h2>
                            <p className="text-sm text-gray-600 mt-2">{card.description || 'This is a description of the card content.'}</p>
                            <Link
                                to={card.cardLink || '#'}
                                className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-medium"
                            >
                                Click to Visit
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>

    )
}

export default Dashboard
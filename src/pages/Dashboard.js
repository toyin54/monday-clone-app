import TicketCard from "../compnents/TicketCard";

const Dashboard = () => {

    const tickets =[
        {
            category: 'Q1 2022',
            color: 'blue',
            title: 'Chelsea Player Training Vid',
            owner: 'Poch',
            avatar: '',
            status : 'done',
            priority: 5,
            progress: 25,
            description: 'Analyze chelsea training vids',
            timestamp: '2023-07-19'

        },
        {
            category: 'Q1 2022',
            color: 'blue',
            title: 'Chelsea Player Training Vid',
            owner: 'Poch',
            avatar: '',
            status : 'done',
            priority: 5,
            progress: 25,
            description: 'Analyze chelsea training vids',
            timestamp: '2023-07-19'

        },
        {
            category: 'Q1 2022',
            color: 'blue',
            title: 'Chelsea Player Training Vid',
            owner: 'Poch',
            avatar: '',
            status : 'done',
            priority: 5,
            progress: 25,
            description: 'Analyze chelsea training vids',
            timestamp: '2023-07-19'

        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Chelsea Player Training Vid',
            owner: 'Poch',
            avatar: '',
            status : 'done',
            priority: 5,
            progress: 100,
            description: 'Analyze chelsea training vids',
            timestamp: '2023-07-19'

        },
        {
            category: 'Q2 2023',
            color: 'blue',
            title: 'Chelsea Player Training Vid',
            owner: 'Poch',
            avatar: '',
            status : 'wip',
            priority: 1,
            progress: 5,
            description: 'Analyze chelsea training vids',
            timestamp: '2023-07-19'


        }

    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category)),
    ]

    console.log(uniqueCategories)
    return(
        <div  className= "dashboard">
            <h1>My Projects</h1>
            <div  className = "ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory , categoryIndex) => (
                    <div key = {categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category == uniqueCategory)
                            .map((filteredTicket , _index) => (
                                <TicketCard
                                    id ={_index}
                                    color = {filteredTicket.color}
                                    ticket = {filteredTicket}
                    />))}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Dashboard
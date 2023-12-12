const member=[
 {
    id:1,
    name: "Abebe Kebede"
 },
 {
    id:2,
    name: "Lema Ergete"
 },
 {
    id:3,
    name:"Yohannes Abay"
 },
 {
    id:4,
    name: "Solomon Misganaw"
 },
 {
    id:5,
    name: "Waga Muluken"
 },
 {
    id:6,
    name:"Bruik Tesfahun"
 },
 {
    id:7,
    name: "Kaleb Samson"
 },
 {
    id:8,
    name: "Kidus Yoseph"
 },
 {
    id:9,
    name:"Assefa Damtew"
 },
 {
    id:10,
    name:"Million Sisay"
 }
];
const  Members=()=>(
    <ul>
        {
            member.map(item=>(
                <li key={item.id}>
                    <div>{item.name}</div>
                </li>
            ))
        }
    </ul>
)
export default Members;
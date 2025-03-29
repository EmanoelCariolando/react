type Props = {
    rate: number;
  }
  
  
  export const Votes = ({ rate }: Props) => {
    if(rate > 5 )  rate = 5
    if(rate < 0 )  rate = 0
  
    const rateInt = Math.floor(rate)

    let emoji = ['','😶', '😐', '😕', '😃', '🤩']
  
    let stars = `${emoji[rateInt]}`.repeat(rateInt) + '😶'.repeat(5 - rateInt)
    

  
     return (
      <div className="h-screen w-screen flex items-center justify-center text-black text-4xl">
        <div className="bg-gray-700 p-2 rounded text-white">{rate.toFixed(1)}</div>
        <div>{stars}</div>
      </div>
    );
   }
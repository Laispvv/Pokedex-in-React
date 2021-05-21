import React, { useEffect, useState } from "react";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const PokeStats = ({statsInfo}) => {
    const [stats, setStats] = React.useState('');
    const [hp, sethp] = React.useState(255);
    const [attack, setattack] = React.useState(190);
    const [defense, setdefense] = React.useState(250);
    const [specialattack, setspecialattack] = React.useState(194);
    const [specialdefense, setspecialdefense] = React.useState(250);
    const [speed, setspeed] = React.useState(200);

    useEffect(() =>{
        if(stats === '') return;
            onChange(stats);
    }, [stats]);

    function CalculatePercentage(baseStats){
        const result = Math.ceil((baseStats.baseStats * 100) / baseStats.stats);
        var color;
        if (result < 25) color = '#ea2035';
        else if (result >= 25 && result < 50) color = '#e5cc10';
        else if (result >= 50 && result < 75) color = '#65e04a';
        else if (result >= 75 && result < 90) color = '#2296f3';
        else if (result >= 90) color = '#7e4ae0';
        else color = '#2b2b2b';
        
        return(
            <Progress 
                status='success'
                percent={result} 
                theme={
                    {
                        success: {
                            symbol: ' ',
                            color: `${color}`
                        },                    
                    }
                }
            />
        );
    }

    function MostrarStatus(stats){
        const status = stats.stats;
        return (
            <div>
                <label>Status Base:</label>
                <div key='stats'>
                    <div className='stats-div'>
                        <div className='info-poke-item' key={`stats ${status[0].stat.name}`} style={{ width: '50%' }}>
                            {status[0].stat.name}: {status[0].base_stat}
                            <CalculatePercentage baseStats={status[0].base_stat} stats={hp}/>
                        </div>
                        <div className='info-poke-item' key={`stats ${status[1].stat.name}`} style={{ width: '50%' }}>
                            {status[1].stat.name}: {status[1].base_stat}
                            <CalculatePercentage baseStats={status[1].base_stat} stats={attack}/>
                        </div>
                    </div>
                    <div className='stats-div'>
                        <div className='info-poke-item' key={`stats ${status[2].stat.name}`} style={{ width: '50%' }}>
                            {status[2].stat.name}: {status[2].base_stat}
                            <CalculatePercentage baseStats={status[2].base_stat} stats={defense}/>
                        </div>
                        <div className='info-poke-item' key={`stats ${status[3].stat.name}`} style={{ width: '50%' }}>
                            {status[3].stat.name}: {status[3].base_stat}
                            <CalculatePercentage baseStats={status[3].base_stat} stats={specialattack}/>
                        </div>
                    </div>
                    <div className='stats-div'>
                        <div className='info-poke-item' key={`stats ${status[4].stat.name}`} style={{ width: '50%' }}>
                            {status[4].stat.name}: {status[4].base_stat}
                            <CalculatePercentage baseStats={status[4].base_stat} stats={specialdefense}/>
                        </div>
                        <div className='info-poke-item' key={`stats ${status[5].stat.name}`} style={{ width: '50%' }}>
                            {status[5].stat.name}: {status[5].base_stat}
                            <CalculatePercentage baseStats={status[5].base_stat} stats={speed}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <MostrarStatus stats={statsInfo}/>
        </div>
    )
}

export default PokeStats
import React from "react"
import echostats from "../../data/echostats.json"


interface EchoEditorProps {
    echo: any;
    onSave: (data: any) => void;
}

export default function EchoEditor(props: EchoEditorProps) {

    // const isPercentageStat = (statName: string) => {
    // // Returns true if the name contains '%' or is a known rate/bonus stat
    // return statName.includes("%") || 
    //        statName.includes("Bonus") || 
    //        statName === "Crit Rate" || 
    //        statName === "Crit DMG" || 
    //        statName === "Energy Regen";
    // };

    // You can use local state to track the form inputs
    const [formData, setFormData] = React.useState({
        instanceId: null,
        sonata: "",
        mainStat: "",
        mainStatValue: 0,
        subStats: [
            { name: "", value: 0 },
            { name: "", value: 0 },
            { name: "", value: 0 },
            { name: "", value: 0 },
            { name: "", value: 0 }
        ]
    });

    const costGroups =  echostats.MainStats.find(group => group.cost === props.echo.cost);
    const validMainStats = costGroups ? costGroups.primary : [];

    React.useEffect(() => {
        if (props.echo) {
            setFormData({
                instanceId: props.echo.instanceId || null,
                sonata: props.echo.sonata || "",
                mainStat: props.echo.mainStat || props.echo.main?.stat || "",
                mainStatValue: props.echo.mainStatValue || props.echo.main?.value || 0,
                subStats: props.echo.subStats || [
                    { name: "", value: 0 },
                    { name: "", value: 0 },
                    { name: "", value: 0 },
                    { name: "", value: 0 }
                ]
            });
        }
    }, [props.echo]);

    return (
<div className="echo-editor-form">
            {/* Conditional rendering for the image/title if echo exists */}
            {props.echo && (
                <>
                    <img src={`/assets/icons/echoes/${props.echo.id}.webp`} alt={props.echo.name} />
                    <h3>{props.echo.name}</h3>
                </>
            )}

            <select 
                value={formData.sonata}
                onChange={(e) => setFormData({...formData, sonata: e.target.value})}
            >
                <option value="" disabled>Select Sonata</option>
                {props.echo.sets?.map((set: string) => (
                    <option key={set} value={set}>{set}</option>
                ))}
            </select>

            <div className="main-stat-row">
                <select 
                    value={formData.mainStat}
                    onChange={(e) => 
                    {const selectedMainStat = validMainStats.find(stat => stat.name === e.target.value);
                        
                    setFormData({...formData, mainStat: e.target.value,
                        mainStatValue: selectedMainStat ? selectedMainStat.maxVal : 0
                    })}}
                >
                    <option value="" disabled>Main Stat</option>
                    {validMainStats.map(stat => (
                        <option key={stat.name} value={stat.name}>
                            {stat.name}
                        </option>
                    ))}
                </select>
                <input 
                    type="number" 
                    value={formData.mainStatValue} 
                    onChange={(e) => setFormData({...formData, mainStatValue: Number(e.target.value)})}
                />
            </div>

            {formData.subStats.map((stat, index) => (
                <div key={index} className="sub-stat-row">
                    <select 
                        key={index} 
                        value={stat.name}
                        onChange={(e) => {
                            const newSubStats = [...formData.subStats];
                            newSubStats[index].name = e.target.value;
                            newSubStats[index].value = 0; 
                            setFormData({...formData, subStats: newSubStats});
                        }}
                    >
                        <option value="" disabled>Select Substat</option>
                        {echostats.Substats.map((substat) => (
                            <option key={substat.name} value={substat.name}>
                                {substat.name}
                            </option>
                        ))}
                    </select>

                    {/* render the actual substat values */}
                   {stat.name && (
                    <select
                        value={stat.value}
                        onChange={(e) => {
                            const newSubStats = [...formData.subStats];
                            newSubStats[index].value = Number(e.target.value);
                            setFormData({...formData, subStats: newSubStats});
                        }}
                    >   
                        <option value="" disabled>Select Value</option>
                        {echostats.Substats.find(s => s.name === stat.name)?.rolls.map((rollValue: number) => (
                            <option key={rollValue} value={rollValue}>
                                {rollValue}
                            </option>
                        ))}
                    </select>
                )}
                </div>
            ))}

            <button onClick={() => props.onSave(formData)}>SAVE ECHO</button>
        </div>
    );
}
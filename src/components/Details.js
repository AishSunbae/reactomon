import React from 'react'
import './Details.css';

function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
  }
export default function Details(props) {
    console.log(props)
    var abilities='\n\p Name \p Hidden'
    props.pokemonDetail.abilities.forEach(element => {
        abilities+=element.ability.name + ' \p ' + element.ability.is_hidden?"Yes\n":"No\n"
    });
    return (
        <div className='title'>
            <h1 >{props.pokemonDetail.name}</h1>
            
            <span>Stats
            <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Hp</th>
                            <th>Attack</th>
                            <th>Defense</th>
                            <th>Special-Attack</th>
                            <th>Special-Defense</th>
                            <th>Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Base Stat</td>
                            <td>{props.pokemonDetail.stats[0].base_stat}</td>
                            <td>{props.pokemonDetail.stats[1].base_stat}</td>
                            <td>{props.pokemonDetail.stats[2].base_stat}</td>
                            <td>{props.pokemonDetail.stats[3].base_stat}</td>
                            <td>{props.pokemonDetail.stats[4].base_stat}</td>
                            <td>{props.pokemonDetail.stats[5].base_stat}</td>
                        </tr>
                        <tr>
                            <td>Effort</td>
                            <td>{props.pokemonDetail.stats[0].effort}</td>
                            <td>{props.pokemonDetail.stats[1].effort}</td>
                            <td>{props.pokemonDetail.stats[2].effort}</td>
                            <td>{props.pokemonDetail.stats[3].effort}</td>
                            <td>{props.pokemonDetail.stats[4].effort}</td>
                            <td>{props.pokemonDetail.stats[5].effort}</td>
                        </tr>
                    </tbody>
                </table>
            </span><br/><hr/><br/>
            <span>
                Base Experience: {props.pokemonDetail.base_experience}
            </span><br/><hr/><br/>
            <span>
                Weight: {props.pokemonDetail.weight}
            </span><br/><hr/><br/>
            <span>
                Height:{props.pokemonDetail.height}
            </span><br/><hr/><br/>
            <span>
                Default:{props.pokemonDetail.is_default?"Yes":"No"}
            </span><br/><hr/><br/>
            <span>Abilities:
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Hidden</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.pokemonDetail.abilities.map(element => 
                            <tr key={getHash(element.ability.name)}>
                                <td>{element.ability.name}</td>
                                <td>{element.is_hidden?"Yes":"No"}</td>
                            </tr>
                    )}
                    </tbody>
                </table>
            </span><br/><hr/><br/>
            <span>
            <table>
                    <thead>
                        <tr>
                            <th>Moves</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.pokemonDetail.moves.map(element => 
                            <tr key={getHash(element.move.name)}>
                                <td>{element.move.name}</td>
                            </tr>
                    )}
                    </tbody>
                </table>
            </span><br/><hr/><br/>
            <span>
            <table>
                    <thead>
                        <tr>
                            <th>Types</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.pokemonDetail.types.map(element => 
                            <tr key={getHash(element.type.name)}>
                                <td>{element.type.name}</td>
                            </tr>
                    )}
                    </tbody>
                </table>
            </span><br/><hr/><br/>
            <span>
            <table>
                    <thead>
                        <tr>
                            <th>Game indices</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.pokemonDetail.game_indices.map(element => 
                            <tr key={getHash(element.version.name)}>
                                <td>{element.version.name}</td>
                            </tr>
                    )}
                    </tbody>
                </table>
            </span><br/><hr/><br/>
        </div>
    )
}

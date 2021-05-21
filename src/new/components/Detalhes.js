import { usePokemonContext } from "../context/PokemonContext";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const Detalhes = () => {
  const { selectedPokemon } = usePokemonContext();

  function MostrarTodosTipos(types) {
    return (
      <div key="types">
        <label>Tipo:</label>
        {types.types.map((item) => (
          <div className="info-poke-item" key={`abilities ${item.type.name}`}>
            {item.type.name}
          </div>
        ))}
      </div>
    );
  }

  function MostrarTodasHabilidades(abilities) {
    return (
      <div key="abilities">
        <label>Habilidades:</label>
        {abilities.types.map((item) => (
          <div
            className="info-poke-item"
            key={`abilities ${item.ability.name}`}
          >
            {item.ability.name}
          </div>
        ))}
      </div>
    );
  }

  function ShowPokemonSprite(imageUrl, alt) {
    const official = imageUrl.imageUrl.other["official-artwork"].front_default;
    const dream = imageUrl.imageUrl.other.dream_world.front_default;
    const pixel = imageUrl.imageUrl.front_default;
    var url = official;
    if (official === null) url = dream;
    if (dream === null) url = pixel;
    if (url === null) return null;
    return (
      <div>
        <img src={url} alt={alt} style={{ height: "150px", width: "150px" }} />
      </div>
    );
  }

  function CalculatePercentage(baseStats) {
    const result = Math.ceil((baseStats.baseStats * 100) / baseStats.stats);
    var color;
    if (result < 25) color = "#ea2035";
    else if (result >= 25 && result < 50) color = "#e5cc10";
    else if (result >= 50 && result < 75) color = "#65e04a";
    else if (result >= 75 && result < 90) color = "#2296f3";
    else if (result >= 90) color = "#7e4ae0";
    else color = "#2b2b2b";

    return (
      <Progress
        status="success"
        percent={result}
        theme={{
          success: {
            symbol: " ",
            color: `${color}`,
          },
        }}
      />
    );
  }

  function MostrarStatus(stats) {
    const status = stats.stats;
    return (
      <div>
        <label>Status Base:</label>
        <div key="stats">
          <div className="stats-div">
            <div
              className="info-poke-item"
              key={`stats ${status[0].stat.name}`}
              style={{ width: "50%" }}
            >
              {status[0].stat.name}: {status[0].base_stat}
              <CalculatePercentage
                baseStats={status[0].base_stat}
                stats={255}
              />
            </div>
            <div
              className="info-poke-item"
              key={`stats ${status[1].stat.name}`}
              style={{ width: "50%" }}
            >
              {status[1].stat.name}: {status[1].base_stat}
              <CalculatePercentage
                baseStats={status[1].base_stat}
                stats={190}
              />
            </div>
          </div>
          <div className="stats-div">
            <div
              className="info-poke-item"
              key={`stats ${status[2].stat.name}`}
              style={{ width: "50%" }}
            >
              {status[2].stat.name}: {status[2].base_stat}
              <CalculatePercentage
                baseStats={status[2].base_stat}
                stats={250}
              />
            </div>
            <div
              className="info-poke-item"
              key={`stats ${status[3].stat.name}`}
              style={{ width: "50%" }}
            >
              {status[3].stat.name}: {status[3].base_stat}
              <CalculatePercentage
                baseStats={status[3].base_stat}
                stats={194}
              />
            </div>
          </div>
          <div className="stats-div">
            <div
              className="info-poke-item"
              key={`stats ${status[4].stat.name}`}
              style={{ width: "50%" }}
            >
              {status[4].stat.name}: {status[4].base_stat}
              <CalculatePercentage
                baseStats={status[4].base_stat}
                stats={250}
              />
            </div>
            <div
              className="info-poke-item"
              key={`stats ${status[5].stat.name}`}
              style={{ width: "50%" }}
            >
              {status[5].stat.name}: {status[5].base_stat}
              <CalculatePercentage
                baseStats={status[5].base_stat}
                stats={200}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedPokemon === null) {
    return (
      <div>
        <div className="super-thin-grey-round details-screen details-image"></div>
        <hr />
        <div className="details-screen">
          <label>Name:</label>
        </div>
        <hr />
        <div className="details-screen">
          <label>Type:</label>
        </div>
        <hr />
        <div className="details-screen">
          <label>Abilities:</label>
        </div>
        <hr />
        <div className="details-screen">
          <label>Status:</label>
        </div>
      </div>
    );
  }

  function InfoPokemon() {
    console.log(selectedPokemon);
    return (
      <div className="flex-auto flex-initial">
        <div className="details-screen details-image">
          <ShowPokemonSprite
            imageUrl={selectedPokemon.sprites}
            alt={selectedPokemon.name}
          />
        </div>
        <hr />
        <div className="details-screen">
          <label>Nome:</label>
          <div className="info-poke-item">{selectedPokemon.name}</div>
        </div>
        <hr />
        <div className="details-screen">
          <MostrarTodosTipos types={selectedPokemon.types} />
        </div>
        <hr />
        <div className="details-screen">
          <MostrarTodasHabilidades types={selectedPokemon.abilities} />
        </div>
        <hr />
        <div className="details-screen">
          <MostrarStatus stats={selectedPokemon.stats} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <InfoPokemon />
    </div>
  );
};

export default Detalhes;

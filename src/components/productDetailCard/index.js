import { Descriptions } from "antd";

const ProductDetailCard = ({ pokemon }) => (
	<Descriptions title="Pokemon Info" bordered>
		<Descriptions.Item label="Name">{pokemon.name}</Descriptions.Item>
		<Descriptions.Item label="Type">{pokemon?.subtypes[0]}</Descriptions.Item>
		<Descriptions.Item label="HP">{pokemon.hp}</Descriptions.Item>
		<Descriptions.Item label="Rarity">{pokemon.rarity}</Descriptions.Item>
		<Descriptions.Item label="ARTIST" span={2}>
			{pokemon.artist}
		</Descriptions.Item>
		<Descriptions.Item label="ATTACKS" span={3}>
			Name: {pokemon?.attacks[0]?.name}
			<br />
			Description: {pokemon?.attacks[0]?.text}
			<br />
			Damage: {pokemon?.attacks[0]?.damage || "N/A"}
			<br />
			Cost: {pokemon?.attacks[0]?.cost[0] || "N/A"}
		</Descriptions.Item>

		<Descriptions.Item label="WEAKNESS">{[pokemon?.weaknesses[0]?.type, pokemon?.weaknesses[0]?.value].join(" , ") || "N/A"}</Descriptions.Item>
		<Descriptions.Item label="RESISTANCE">
			{(pokemon?.resistances && [(pokemon?.resistances[0]?.type, pokemon?.resistances[0]?.value)].join(" , ")) || "N/A"}
		</Descriptions.Item>
		<Descriptions.Item label="RETREAT COST">{(pokemon?.retreatCost && pokemon?.retreatCost[0]) || "N/A"}</Descriptions.Item>
		<Descriptions.Item label="legalities">
			Standard: {pokemon.legalities.standard || "Not Legal"}
			<br />
			Expanded: {pokemon.legalities.expanded || "Not Legal"}
			<br />
			Unlimited: {pokemon.legalities.unlimited || "Not Legal"}
		</Descriptions.Item>
		<Descriptions.Item label="Price" span={3}>
			$ {pokemon.cardmarket.prices.averageSellPrice}
		</Descriptions.Item>
	</Descriptions>
);
export default ProductDetailCard;

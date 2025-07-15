import * as fs from 'fs'
import * as iconList from '@mdi/svg/meta.json'
import * as mdiPaths from '@mdi/js'
import { $mol_tree2 as Tree } from 'mol_tree2'

const demo_path = `../demo/demo.view.tree`
const demo_prev = Tree.fromString( fs.readFileSync( demo_path ).toString(), demo_path )

let links = [] as InstanceType< typeof Tree >[]

function snakeToCamel( s: string ) {
	return s.split( '-' ).map( t => t[ 0 ].toUpperCase() + t.substring( 1 ) ).join( '' )
}

for( const icon of iconList ) {

	const tokens = icon.name.split( '-' )
	const path = tokens.slice( 0, tokens.length )
	const name = tokens[ tokens.length - 1 ]

	for( let i = 0; i < path.length; ++i ) {
		const dir = `../${ path.slice( 0, i + 1 ).join( '/' ) }`
		if( !fs.existsSync( dir ) ) fs.mkdirSync( dir )
	}

	links.push( Tree.struct( `$mol_icon_${ tokens.join( '_' ) }`, [ Tree.data( [ ...icon.aliases, ...icon.tags ].join( ' ' ) ) ] ) )

	fs.writeFileSync(
		`../${ path.join( '/' ) }/${ name }.view.tree`,
		`$mol_icon_${ tokens.join( '_' ) } $mol_icon path \\${ mdiPaths[ `mdi${ snakeToCamel( icon.name ) }` as keyof typeof mdiPaths ] }\n`
	)
	
	const demo_next = demo_prev.insert( demo_prev.struct( '*', links ), null, null, 'data', '*' )

	fs.writeFileSync( demo_path, demo_next.toString() )

}

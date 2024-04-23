namespace $.$$ {
	export class $mol_icon_demo extends $.$mol_icon_demo {

		icons_filter( next? : string ) {
			return this.$.$mol_state_arg.value( 'filter' , next ) || ''
		}

		@ $mol_mem_key
		Row_icon( name: string ) {
			return new ( ( this.$ as any )[ name ] as typeof $mol_icon )
		}

		row_title( name: string ) {
			return name
		}

		row_descr( name: string ) {
			return ( this.data() as any )[ name ]
		}

		@ $mol_mem
		icons_all() {
			return Object.keys( this.data() )
		}

		@ $mol_mem
		icons_filtered() {
			const data = this.data()
			return this.icons_all().filter( $mol_match_text( this.icons_filter() , name => [ name.replace( /^\$mol_icon_/ , '' ) , ( data as any )[ name ] ] ) )
		}
		
		@ $mol_mem
		output() {
			return this.icons_filtered().map( name => this.Row( name ) )
		}

	}
}
